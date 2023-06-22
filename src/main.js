//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.json' assert {type:'json'} ;

const ArrayDePokemons = data.pokemon;

const button = document.getElementById("comenzar");
button.addEventListener("click", function () {
  window.location.href= 'index2.html';
});