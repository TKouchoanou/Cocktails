import {Routes} from "@angular/router";
//pathMatch:'full' car la route cocktail match avec une chaine vide, la chaine vide est prefixe de toutes les routes
export const APP_ROOT:Routes=[{path:'',redirectTo:'cocktails',pathMatch:'full'}];
