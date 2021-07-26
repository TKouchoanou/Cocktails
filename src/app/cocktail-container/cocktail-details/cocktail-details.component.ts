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
    //recuperation de l'index du cocktail dans la route
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => { console.log("recup cockta index"+paramMap.get('index'));
        //recuperation du cocktail avec l'index
          this.cocktailService.getCocktail(paramMap.get('index')).subscribe((cocktail:Cocktail | undefined)=>{if(cocktail)this.cocktail=cocktail;});
      }
    )
  }
  addToPanier(){
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
