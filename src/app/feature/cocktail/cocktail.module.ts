import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CocktailListComponent} from "./cocktail-container/cocktail-list/cocktail-list.component";
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {CocktailFormComponent} from "./cocktail-form/cocktail-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "../../shared/pipes/filter.pipe";
import {RouterModule} from "@angular/router";
import {COCKTAIL_ROOT} from "./cocktail.routes";


@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(COCKTAIL_ROOT)
  ]
})
export class CocktailModule { }
