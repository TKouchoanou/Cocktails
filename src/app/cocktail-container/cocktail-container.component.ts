import { Component, OnInit } from '@angular/core';
import {Cocktail} from "../interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {
  cocktails:Array <Cocktail> =[{
    name:'Mojito',
    img:'https://smiiz.com/wp-content/uploads/2021/03/mojito.jpg',
    description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser. Le Mojito, traditionnellement composé de 4 à 6 cl de rhum blanc, d’eau gazeuse, de 3 cuillères à café de sucre de canne, d’1/2 citron vert, de glaçons et de feuilles de menthe, peut aussi se dévergonder avec du jus de fraise par exemple ! Il se mariera à la perfection avec un délicieux guacamole au piment doux. '
  },
    {
      name:'Sangria',
      img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/sangria.jpg?itok=LjVLCYpj',
      description:'Offrez à vos invités un petit détour par l’Espagne avec une Sangria rouge (il existe également des versions blanches et rose). Pour un pichet de 6 personnes, mélangez 1l de vin rouge, 25cl de limonade, 20cl de jus d’orange, 10cl de Cointreau ainsi que deux oranges et un citron jaune coupés en tranches. Ajoutez une gousse de vanille, 50g de sucre en poudre et ½ cuillère à café de cannelle moulue. Et si pour aller un peu plus loin dans le thème vous proposiez à vos invités quelques tranches de jambon Serrano ?'
    },
    {
      name:'Le Spritz',
      img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/spritz.jpg?itok=783yiFqu',
      description:'Longtemps oublié car un peu amer, le Spritz s’offre pourtant depuis quelques années un retour triomphant, notamment auprès des plus jeunes. Pour le réaliser il vous faudra : 6cl de Prosecco, 4 cl d’un alcool amer à l’image de l’Apérol, 2 cl d’eau gazeuse, une tranche d’orange et des glaçons. Il sera le meilleur allié de tous vos antipasti alors le moment est venu de sortir vos involtinis, vos olives Atelier Blini et vos mini poivrons fourrés à la ricotta ! '
    }];

    selectedCocktail!:Cocktail;
  constructor() { }

  ngOnInit(): void {
    this.selectedCocktail=this.cocktails[0];
  }
  onChangeCocktail(cocktail:Cocktail){
    this.selectedCocktail=cocktail;
  }

}
