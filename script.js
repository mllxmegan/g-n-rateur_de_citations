const quotesData = [
  {
    "text": "Dans une si petite main ,elle paraitra plus grande ",
    "author": "Deadpool"
  },
  {
    "text": "Ce soir branlette",
    "author": "Deadpool"
  },
  {
    "text": "LEGEN... DARY",
    "author": "Barney Stinson"
  },
  {
    "text": "Challenge accepté",
    "author": "Barney Stinson"
  },
  {
    "text": "Se taper 2 moches c'est comme se taper une belle ",
    "author": "Barney Stinson"
  },
  {
    "text": " J’enseigne à Ted comment vivre. Voyez-moi comme le Yoda, Sauf qu’au lieu d’être petit et vert, je porte des costumes et je suis génial. Je suis ton frère, je suis Bro-da! Et ce soir, tu va utiliser la force pour choper n’importe quelle fille ici.",
    "author": "Barney Stinson"
  },
  {
    "text": "Les filles de notre génération ne savent plus cuisiner comme leur mère … Mais elles savent boire comme leur père",
    "author": "Barney Stinson"
  },
  {
    "text": "Parler à une femme avec qui tu as déjà couché c’est comme changer l’huile sur une voiture de location",
    "author": "Barney Stinson"
  },

];

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

let currentQuote = '';
let currentAuthor = '';
const btn = document.querySelector('.button');
const quote = document.querySelector('#text');
const author = document.querySelector('.quote-author');

function getRandomColor() {
  const randomColor = colors[
    Math.floor(Math.random() * colors.length)
  ];


  // Your code below
  document.body.style.color = randomColor;
  document.body.style.backgroundColor = randomColor;
  btn.style.backgroundColor = randomColor;
  quote.style.color = randomColor
  // Your code above
}

function getRandomQuote() {
  const randomQuote = quotesData[
    Math.floor(Math.random() * quotesData.length)
  ];

  currentQuote = randomQuote.text;
  currentAuthor = randomQuote.author;

  // Your code below
quote.textContent = currentQuote;
author.textContent = currentAuthor;
  // Your code above

  getRandomColor();
}

getRandomQuote();

// Your code below
btn.addEventListener('click',getRandomColor);

btn.addEventListener('click',getRandomQuote);
// Your code above
