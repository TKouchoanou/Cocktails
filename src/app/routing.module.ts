import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_ROOT} from "./routes";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROOT)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
