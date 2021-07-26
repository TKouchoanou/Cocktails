import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CocktailListComponent} from "./cocktail-container/cocktail-list/cocktail-list.component";
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {CocktailFormComponent} from "./cocktail-form/cocktail-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RoutingModule} from "../../routing.module";
import {FilterPipe} from "../../shared/pipes/filter.pipe";


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
    RoutingModule //car il y a un router-outlet on fait du sous-routing
  ]
})
export class CocktailModule { }
