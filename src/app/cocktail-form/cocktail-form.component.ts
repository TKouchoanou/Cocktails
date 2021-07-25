import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CocktailService} from "../shared/service/cocktail.service";
import {Cocktail} from "../shared/interfaces/cocktail.interface";
import {Ingredient} from "../shared/interfaces/ingredient.interface";

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
      if (index !== null) {
        this.cocktail = this.cocktailService.getCocktail(Number(index));
      }
      this.initForm(this.cocktail);
    });

  }
  get ingredients(){
    return this.cocktailForm.get('ingredients') as FormArray
  }
  public addIngredient(): void {
    this.ingredients.push(new FormGroup(
      {
              'name':new FormControl('',Validators.required),
               'quantity':new FormControl('',[Validators.required,Validators.min(0)])
              }
              ))
  }
  public submit(): void {
    let index=this.cocktailService.addCocktail(this.cocktailForm.value);
    console.log(index)
    this.router.navigate(["cocktails/"+index,{relatedTo:this.activatedRoute}])
  }
  initForm(cocktail: Cocktail={name:'copacabana',img:'https://www.destinationcocktails.fr/wp-content/uploads/2021/07/cocktail-pinacolada.jpg',description:'vide',ingredients:[]}) {
    this.cocktailForm=this.fb.group({
      'name':[cocktail.name,Validators.required],
      'img':[cocktail.img,Validators.required],
      'description':cocktail.description,
      'ingredients': this.fb.array(cocktail.ingredients.map(this.ingredientToFormGroup.bind(this)),Validators.required)
    })
  }

  public  ingredientToFormGroup(ingredient:Ingredient={name:'pom',quantity:1}){
   return  this.fb.group({name:[ingredient.name,Validators.required],
                               quantity:[ingredient.quantity,[Validators.required,Validators.min(0)]]
                               }) as FormGroup
  }
//Pina Colada
// Dans un shaker, versez les ingrédients en commençant par la dose de rhum blanc Old Nick puis en rajoutant successivement les autres. Secouez énergiquement pendant une minute afin de bien les mélanger. Servez votre cocktail dans un grand verre, sur un lit généreux de glaçons, en ayant pris soin de soigner la décoration (feuille de menthe ou morceau d’ananas coupé planté sur une pique en bois). Dégustez votre Piña Colada très fraîche.
//
// de rhum blanc 40° Old Nick
// 4
// jus d'ananas
// 6
// Lait de coco
// 6
// sirop de canne
// 1

}
