import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanierContainerComponent} from "./panier-container/panier-container.component";
import {IngredientListComponent} from "./panier-container/ingredient-list/ingredient-list.component";


@NgModule({
  declarations: [
    PanierContainerComponent,
    IngredientListComponent,],
  imports: [
    CommonModule
  ]
})
export class PanierModule { }
