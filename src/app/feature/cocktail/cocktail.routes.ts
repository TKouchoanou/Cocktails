import {Routes} from "@angular/router";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {CocktailFormComponent} from "./cocktail-form/cocktail-form.component";
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";

export const COCKTAIL_ROOT:Routes=[
  {path:'cocktails',component: CocktailContainerComponent,
    children:[
      { path: "new", component: CocktailFormComponent },
      { path: ":index/edit", component: CocktailFormComponent },

      {path:':index',component:CocktailDetailsComponent},
      {path:'',redirectTo:'default',pathMatch:'full'}]}
];
