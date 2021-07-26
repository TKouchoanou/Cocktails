import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterPipe} from "../pipes/filter.pipe";
import {SelectedDirective} from "../directives/selected.directive";


@NgModule({
  declarations: [FilterPipe, SelectedDirective],
  imports: [
    CommonModule
  ],
  exports: [CommonModule,FilterPipe,SelectedDirective]
})
export class SharedModule { }
