import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cocktail} from "../interfaces/cocktail.interface";
import {cocktails} from "../data/cocktails";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
    public cocktails$:BehaviorSubject<Cocktail[]>=new BehaviorSubject<Cocktail[]>(cocktails);
    public selectedCocktail$:BehaviorSubject<Cocktail>=new BehaviorSubject<Cocktail>(this.cocktails$.value[0])
  constructor() { }
  selectedCocktail(cocktail:Cocktail){
    this.selectedCocktail$.next(cocktail);
  }
  getCocktail(index:number | string|null){
      if ( typeof index ==='number' || typeof index==='string'){
        if(this.cocktails$.value.length>+index)
        return  this.cocktails$.value[+index];
      }
        return this.cocktails$.value[0];
  }
  public addCocktail(cocktail: Cocktail): number {
    let cocktails = this.cocktails$.value;
    let length= cocktails.push(cocktail);
    this.cocktails$.next(cocktails);
    return length-1;
  }

  public editCocktail(editedCocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next(
      value.map((cocktail: Cocktail) => {
        if (cocktail.name === editedCocktail.name) {
          return editedCocktail;
        } else {
          return cocktail;
        }
      })
    );
  }
}
