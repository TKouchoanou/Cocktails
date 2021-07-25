import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // dirty et pristine qui sont opposés, et touched et untouched
    //Quelle balise allons nous utiliser pour spécifier à un utilisateur
    // que son input n’est pas valide, mais seulement après qu’il ait essayé de le remplire ? .ng-invalid.ng-dirty
  }

}
