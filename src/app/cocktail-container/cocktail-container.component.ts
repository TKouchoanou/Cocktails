import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from "../shared/interfaces/cocktail.interface";
import {CocktailService} from "../shared/service/cocktail.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  cocktails:Array <Cocktail> =[];
  selectedCocktail!:Cocktail;
  private subscription:Subscription=new Subscription();

  constructor(private cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.subscription.add(this.cocktailService.cocktails$.subscribe((cocktails)=>{this.cocktails=cocktails}))
    this.subscription.add(this.cocktailService.selectedCocktail$.subscribe((cocktail)=>{this.selectedCocktail=cocktail}))
  }

  onSelectedCocktail(cocktail:Cocktail){
    this.cocktailService.selectedCocktail(cocktail);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
