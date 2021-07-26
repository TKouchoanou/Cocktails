//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import {RoutingModule} from "./routing.module";

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//pipes
import { FilterPipe } from './shared/pipes/filter.pipe';

//directives
import { SelectedDirective } from './shared/directives/selected.directive';
import {CocktailModule} from "./feature/cocktail/cocktail.module";
import {PanierModule} from "./feature/panier/panier.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective,
  ],
  imports: [
    BrowserModule,RoutingModule,HttpClientModule,CocktailModule,PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
