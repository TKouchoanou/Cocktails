import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {PanierService} from "../../shared/service/panier.service";
import {CocktailService} from "../../shared/service/cocktail.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  @Input()cocktail!:Cocktail;

  constructor(private panierService:PanierService,private cocktailService:CocktailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.cocktail = this.cocktailService.getCocktail(paramMap.get('index'));
      }
    )
  }
  addToPanier(){
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
