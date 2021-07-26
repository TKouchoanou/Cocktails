import { Pipe, PipeTransform } from '@angular/core';
import {Cocktail} from "../interfaces/cocktail.interface";
@Pipe({
  name: 'filter',
  //greedy mais permet d'être plus reactive
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string):Cocktail[]  {
    return cocktails.filter((cocktail)=>{return cocktail.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())});
  }

}
