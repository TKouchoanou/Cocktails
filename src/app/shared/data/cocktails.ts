import {Cocktail} from "../interfaces/cocktail.interface";

export const cocktails: Cocktail[]= [{
  name: 'Mojito',
  img: 'https://smiiz.com/wp-content/uploads/2021/03/mojito.jpg',
  description: 'Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser. Le Mojito, traditionnellement composé de 4 à 6 cl de rhum blanc, d’eau gazeuse, de 3 cuillères à café de sucre de canne, d’1/2 citron vert, de glaçons et de feuilles de menthe, peut aussi se dévergonder avec du jus de fraise par exemple ! Il se mariera à la perfection avec un délicieux guacamole au piment doux. ',
  ingredients: [
    { name: "Perrier", quantity: 1 },
    { name: "Rhum", quantity: 1 },
    { name: "Menthe", quantity: 1 },
    { name: "Lemon", quantity: 1 }
  ]
},
  {
    name: 'Sangria',
    img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/sangria.jpg?itok=LjVLCYpj',
    description: 'Offrez à vos invités un petit détour par l’Espagne avec une Sangria rouge (il existe également des versions blanches et rose). Pour un pichet de 6 personnes, mélangez 1l de vin rouge, 25cl de limonade, 20cl de jus d’orange, 10cl de Cointreau ainsi que deux oranges et un citron jaune coupés en tranches. Ajoutez une gousse de vanille, 50g de sucre en poudre et ½ cuillère à café de cannelle moulue. Et si pour aller un peu plus loin dans le thème vous proposiez à vos invités quelques tranches de jambon Serrano ?',
    ingredients: [
      { name: "Tablespoons sugar", quantity: 2 },
      { name: " orange, cut into wedges", quantity: 1 },
      { name: "apple, cored and diced", quantity: 1 },
      { name: "cup orange juice", quantity: 1/2 },
      { name: " bottle dry red wine (like Rioja", quantity: 1 },
      { name: " Garnish: orange whee", quantity: 1/2 }
    ]
  },
  {
    name: 'Le Spritz',
    img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/spritz.jpg?itok=783yiFqu',
    description: 'Longtemps oublié car un peu amer, le Spritz s’offre pourtant depuis quelques années un retour triomphant, notamment auprès des plus jeunes. Pour le réaliser il vous faudra : 6cl de Prosecco, 4 cl d’un alcool amer à l’image de l’Apérol, 2 cl d’eau gazeuse, une tranche d’orange et des glaçons. Il sera le meilleur allié de tous vos antipasti alors le moment est venu de sortir vos involtinis, vos olives Atelier Blini et vos mini poivrons fourrés à la ricotta ! ',
    ingredients: [
      { name: "Perrier", quantity: 1 },
      { name: "Campari", quantity: 1 },
      { name: "'Apérol", quantity: 1 },
      { name: " Prosecco", quantity: 1 },

    ]
  },
  {
    name: "Cosmopolitan",
    img:
      "https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px",
    description:
      "The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.",
    ingredients: [
      { name: "Cranberry", quantity: 1 },
      { name: "Citron", quantity: 1 },
      { name: "Vodka", quantity: 1 }
    ]
  },
  {
    name: "Mai Tai",
    img:
      "https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px",
    description:
      "The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.",
    ingredients: [
      { name: "Rhum", quantity: 1 },
      { name: "Triple sec", quantity: 1 },
      { name: "Citron", quantity: 1 }
    ]
  }
   ];

