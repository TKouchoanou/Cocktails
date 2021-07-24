import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails! :Cocktail[];

  constructor() { }

  ngOnInit(): void {
  }


}
