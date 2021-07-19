import { Component } from '@angular/core';
import {Cocktail} from "./interfaces/cocktail.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 cocktail: Cocktail={
   nom:'Mojito',
   img:'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2020-08/articles-images-corps-texte-8.png?itok=tDVVevZ-',
   description:'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser. Le Mojito, traditionnellement composé de 4 à 6 cl de rhum blanc, d’eau gazeuse, de 3 cuillères à café de sucre de canne, d’1/2 citron vert, de glaçons et de feuilles de menthe, peut aussi se dévergonder avec du jus de fraise par exemple ! Il se mariera à la perfection avec un délicieux guacamole au piment doux. '
 };
}
