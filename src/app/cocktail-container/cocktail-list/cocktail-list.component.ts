import { Component,Input } from '@angular/core';
import {Cocktails} from "../../shared/interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  @Input() cocktails :Cocktails=null;
  public search = "";

}
