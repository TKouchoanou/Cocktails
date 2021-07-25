import {Routes} from "@angular/router";
import { CocktailContainerComponent} from './cocktail-container/cocktail-container.component'
import {PanierContainerComponent} from "./panier-container/panier-container.component";
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";
import {CocktailFormComponent} from "./cocktail-form/cocktail-form.component";
//pathMatch:'full' car la route cocktail match avec une chaine vide, la chaine vide est prefixe de toutes les routes
export const APP_ROOT:Routes=[
                              {path:'',redirectTo:'cocktails',pathMatch:'full'},
                               {path:'cocktails',component: CocktailContainerComponent,
                                 children:[
                                   { path: "new", component: CocktailFormComponent },
                                   { path: ":index/edit", component: CocktailFormComponent },

                                   {path:':index',component:CocktailDetailsComponent},
                                   {path:'',redirectTo:'0',pathMatch:'full'}]},
                                   {path:'panier',component:PanierContainerComponent}
                              ];
