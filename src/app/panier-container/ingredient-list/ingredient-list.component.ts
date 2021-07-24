import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Ingredient } from "../../shared/interfaces/ingredient.interface";
import {PanierService} from "../../shared/service/panier.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit,OnDestroy {
  @Input() public ingredients: Ingredient[] |null=null;
  private subscription:Subscription=new Subscription();
  constructor(private panierService:PanierService) { }


  ngOnInit(): void {
    let s1=this.panierService.ingredients$.subscribe((ingredients)=>this.ingredients=ingredients)
    this.subscription.add(s1);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
