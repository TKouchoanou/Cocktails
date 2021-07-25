import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Ingredient} from "../interfaces/ingredient.interface";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public ingredients$:BehaviorSubject<Ingredient[]| null>=new BehaviorSubject<Ingredient[] |null>(null)

  constructor() { console.log('service panier')}

  public addToPanier(ingredients:Ingredient[]){
   let  merge: {[key: string]: Ingredient[]}={};
    let result:Ingredient[];
    if(this.ingredients$.value){

       [...this.ingredients$.value,...ingredients].forEach((ingredient)=> {
        if (merge[ingredient.name]) {
          merge[ingredient.name].push(ingredient)
        } else {
          merge[ingredient.name]=[ingredient]
        }
      })

     result=Object.keys(merge).map(ingredientName => ({name:ingredientName,quantity:merge[ingredientName].map((ingredient)=>ingredient.quantity).reduce((quantities,quantity)=>quantities+quantity
     )}))
      this.ingredients$.next(result);

    }else {
      this.ingredients$.next(ingredients);

    }

  }
}
