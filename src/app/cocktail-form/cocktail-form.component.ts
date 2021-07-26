import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CocktailService} from "../shared/service/cocktail.service";
import {Cocktail} from "../shared/interfaces/cocktail.interface";
import {Ingredient} from "../shared/interfaces/ingredient.interface";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
public cocktailForm!:FormGroup;
public cocktail!:Cocktail;
  constructor(private fb:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute, private cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get("index");
      alert(index)
      if (index !== null) {
         this.cocktailService.getCocktail(index).subscribe((cocktail:Cocktail | undefined)=>{if(cocktail)this.cocktail =cocktail});
      }
      this.initForm(this.cocktail);
    });

  }

  get ingredients(){
    return this.cocktailForm.get('ingredients') as FormArray
  }

  public addIngredient(): void {
    this.ingredients.push(this.ingredientToFormGroup())
  }

  public submit(): void {

    if (this.cocktail && this.cocktail._id) {
      this.cocktailService.editCocktail(this.cocktail._id,this.cocktailForm.value).pipe(first()).subscribe(this.redirectFn);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).pipe(first()).subscribe(this.redirectFn);
    }

  }
  initForm(cocktail: Cocktail={name:'copacabana',img:'https://www.destinationcocktails.fr/wp-content/uploads/2021/07/cocktail-pinacolada.jpg',description:'Le cocktail Piña Colada puise ses origines à Puerto Rico où il a été inventé par un barman de l’hôtel Caribe Hilton en 1954. Décrétée 30 ans plus tard boisson nationale, désormais reconnu à l’échelle internationale, cet élixir doux et fruité concentre dans le verre toutes les saveurs ensoleillées des Caraïbes. Le goût de l’ananas prédomine, mais quoi de plus normal lorsque l’on sait que Piña Colada se traduit littéralement par « ananas pressé » en espagnol !',ingredients:[]}) {
    this.cocktailForm=this.fb.group({
      'name':[cocktail.name,Validators.required],
      'img':[cocktail.img,Validators.required],
      'description':cocktail.description,
      'ingredients': this.fb.array(cocktail.ingredients.map(this.ingredientToFormGroup.bind(this)),Validators.required)
    })
  }

  public  ingredientToFormGroup(ingredient:Ingredient={name:'rhum',quantity:1}){
   return  this.fb.group({name:[ingredient.name,Validators.required],
                               quantity:[ingredient.quantity,[Validators.required,Validators.min(0)]]
                               })
  }

  public get redirectFn(){
   return (cocktail:Cocktail) => {
      this.router.navigate(["cocktails/" + cocktail._id, {relatedTo: this.activatedRoute}])
    }
  }

}
