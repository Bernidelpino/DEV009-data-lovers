//import data from './data/pokemon/pokemon.json';


//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.json' assert {type:'json'} ;

//hacer arreglo en una constante.
const ArrayDePokemons = data.pokemon;

//obtener el botón para empezar
const button = document.getElementById("comenzar");
button.addEventListener("click", function () {
  window.location.href= 'index.html';
});
//declara una lista, la encuentra por su id.
const viewPokemonList = document.getElementById("root");
//Crea una estructura de repetición con el arreglo que guardo en la linea 9.
for(const i of ArrayDePokemons){
  //Crea un elemento div que se llamará cardDataPokemon.
  const cardDataPokemon = document.createElement('div');
  //Le entrega una clase que se llama VistaDeTarjetas.
  cardDataPokemon.setAttribute('class','VistaDeTarjetas');
  //crea elementos , y una imagen dentro
  //####################################################
  const na = document.createElement('p');
  const imgn = document.createElement('img');
  const num = document.createElement('p');
  const desc = document.createElement('p');
  //####################################################
  //Declara variable imagen (imgn) buscando en el arreglo con un contador y su propiedad img.
  imgn.src = i.img;
  //Lo mismo pero con textcontent
  num.textContent = i.num;
  desc.textContent = i.about;
  na.textContent = i.name;
  //AppendChild surve para poner un valor o imagen en el html.
  cardDataPokemon.appendChild(na);
  cardDataPokemon.appendChild(imgn);
  cardDataPokemon.appendChild(num);
  cardDataPokemon.appendChild(desc);
  viewPokemonList.appendChild(cardDataPokemon);
}