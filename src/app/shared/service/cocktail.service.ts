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
        return  this.cocktails$.value[+index];
      }
      else{
        return this.cocktails$.value[0];
      }
  }
}
