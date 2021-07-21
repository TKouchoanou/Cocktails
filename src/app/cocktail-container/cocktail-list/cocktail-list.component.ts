import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Cocktail} from "../../interfaces/cocktail.interface";
@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails! :Cocktail[];
  @Output() changeCocktail:EventEmitter <Cocktail>= new EventEmitter<Cocktail>();
  constructor() { }

  ngOnInit(): void {
  }
  selectedCocktail(cocktail:Cocktail){
    this.changeCocktail.emit(cocktail);
  }

}
