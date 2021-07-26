import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable} from "rxjs";
import {Cocktail, Cocktails} from "../interfaces/cocktail.interface";
import {HttpClient} from "@angular/common/http"
import {cocktails} from "../data/cocktails";
import {first, map, tap} from "rxjs/operators";
import {Duplicate} from "../error/duplicate";


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
    private endpoint_url="https://restapi.fr/api/theophane-malo-cocktails";
    public cocktails$:BehaviorSubject<Cocktails>=new BehaviorSubject<Cocktails >(null);

  constructor(private http: HttpClient) {
    this.seed();
    this.fetchAll().subscribe();
  }

  /**
   * vu que la valeur du subject peut être nulle ou un tableau
   * ceci de le récupérer en tant que tableau à coup sur
   * ainsi j'ai pas besoin de tester si c'est null ou pas pour appliquer
   * les méthodes de l'Api des tableaux
   */
  public get cocktails$_Value(){
      return this.cocktails$.value!==null? this.cocktails$.value:[]
   }

  getCocktail(index:string|null):Observable<Cocktail | undefined>{
    return this.cocktails$.pipe(
     first((cocktailList: Cocktail[] |null) => cocktailList!= null),
      // flux coupé après la première valeur non null plus besoin d'unsuscribe
      map(this.findFn(index))
    );
  }

  /**
   *
   * @param index
   */
  public findFn(index:string|null):(cocktailList: Cocktails) => Cocktail | undefined {
     if(index && index!=='default') {
       return (cocktailList: Cocktails) => {
         if(cocktailList){return cocktailList.find((cocktail:Cocktail)=>cocktail._id===index)
         }else {
           return undefined
         }
       }
     }else {
       return (cocktailList: Cocktails)=> {
         if(cocktailList){
          return  cocktailList[0];
         }else {
           return undefined
         }

       }
       }
     }

  /**
   *
   * @private
   */
  private seed() {
    this.http
      .get<Cocktail[]>(this.endpoint_url)
      .subscribe((cocktailList: Cocktail[]) => {
        if (!cocktailList.length) {
          this.http
            .post(this.endpoint_url, cocktails
            )
            .subscribe();
        }
      });
  }

  /**
   * recupère tout les ocktails du serveurs
   */
  public fetchAll(): Observable<Cocktail[]> {
    return this.http.get< Cocktail[]>(this.endpoint_url).pipe(
      tap((cocktailList: Cocktail[]) => {
        this.cocktails$.next(cocktailList);
      })
    );
  }

  /**
   *
   * @param cocktail
   */
  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
      if (this.isNotDuplicateCocktail(cocktail)){
        return this.http
          .post<Cocktail>(this.endpoint_url, cocktail)
          .pipe(
            tap((newCocktail: Cocktail) => {
              this.cocktails$.next([...this.cocktails$_Value, newCocktail]);
            })
          );
      }else {
        throw new Duplicate(`le cocktail ${cocktail.name} existe deja`)
      }
  }

  /**
   *
   * @param newCocktail
   */
  public isNotDuplicateCocktail(newCocktail:Cocktail){
      return this.cocktails$_Value.find((cocktail)=>cocktail.name===newCocktail.name)===undefined;
  }

  /**
   *
   * @param cocktailId
   * @param editedCocktail
   */
  public editCocktail(cocktailId: string, editedCocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(this.endpoint_url+'/'+cocktailId, editedCocktail)
      .pipe(
        tap((editCocktail: Cocktail) => {
          this.cocktails$.next(
            this.cocktails$_Value.map((cocktail: Cocktail) => {
              if (cocktail._id === editCocktail._id) {
                return editCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );
  }

  /**
   *
   * @param cocktailId
   */
  public delete(cocktailId:string){
    this.http.delete(this.endpoint_url+"/"+cocktailId).subscribe()
  }

  /**
   * purge
   */
  public reset(){
    this.cocktails$_Value.forEach(
      (cocktail,i)=>{
        if(cocktail._id){
        setTimeout(this.delete.bind(this,cocktail._id),i*10000);
        }
      })
  }


}

