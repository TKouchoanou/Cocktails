import {Routes} from "@angular/router";
import { CocktailContainerComponent} from './feature/cocktail/cocktail-container/cocktail-container.component'
import {PanierContainerComponent} from "./feature/panier/panier-container/panier-container.component";
import {CocktailDetailsComponent} from "./feature/cocktail/cocktail-container/cocktail-details/cocktail-details.component";
import {CocktailFormComponent} from "./feature/cocktail/cocktail-form/cocktail-form.component";
//pathMatch:'full' car la route cocktail match avec une chaine vide, la chaine vide est prefixe de toutes les routes
export const APP_ROOT:Routes=[
                              {path:'',redirectTo:'cocktails',pathMatch:'full'},
                               {path:'cocktails',component: CocktailContainerComponent,
                                 children:[
                                   { path: "new", component: CocktailFormComponent },
                                   { path: ":index/edit", component: CocktailFormComponent },

                                   {path:':index',component:CocktailDetailsComponent},
                                   {path:'',redirectTo:'default',pathMatch:'full'}]},
                                   {path:'panier',component:PanierContainerComponent}
                              ];
