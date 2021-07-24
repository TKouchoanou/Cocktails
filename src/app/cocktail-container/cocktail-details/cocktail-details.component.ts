import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import { Ingredient } from "../../shared/interfaces/ingredient.interface";
import {PanierService} from "../../shared/service/panier.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  @Input()cocktail!:Cocktail;

  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
  }
  addToPanier(){
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
