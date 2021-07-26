import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanierContainerComponent} from "./panier-container/panier-container.component";
import {IngredientListComponent} from "./panier-container/ingredient-list/ingredient-list.component";
import {RouterModule} from "@angular/router";
import {PANIER_ROOT} from "./panier.routes";


@NgModule({
  declarations: [
    PanierContainerComponent,
    IngredientListComponent,],
  imports: [
    CommonModule,RouterModule.forChild(PANIER_ROOT)
  ]
})
export class PanierModule { }
