import {Component} from '@angular/core';
import {Cocktails} from "../shared/interfaces/cocktail.interface";
import {CocktailService} from "../shared/service/cocktail.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent  {
  //en Observable pour empêcher de l'utiliser comme observer via next()
  cocktails$:Observable <Cocktails> =this.cocktailService.cocktails$;

  constructor(private cocktailService:CocktailService) {
  }

}
