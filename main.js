function Pokemon(nombre, color, puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.puntosAtaque = puntosAtaque;
  this.vida = 100;
  this.pelear = function(pokemonObjeto){
  pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }
}
var pokemons = [];

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value)
                          )

  pokemons.push(pokemon);
  mostrarPokemonsPrimerSelect();
  mostrarPokemonsSegundoSelect();
  nombrePokemon.value = "";
  colorPokemon.value = "";
  puntosAtaque.value = "";
}

function mostrarPokemonsPrimerSelect(){
  var selectUnoDePokemons = document.getElementById("primerSelect");
  selectUnoDePokemons.innerHTML = "";
  pokemons.forEach(function (pokemon){
    var option = document.createElement("option");
    option.innerText = pokemon.nombre;
    selectUnoDePokemons.appendChild(option);
  });

}
function mostrarPokemonsSegundoSelect(){
  var selectDosDePokemons = document.getElementById("segundoSelect");
  selectDosDePokemons.innerHTML = "";
  pokemons.forEach(function (pokemon){
    var option = document.createElement("option");
    option.innerText = pokemon.nombre;
    selectDosDePokemons.appendChild(option);

  });
}
function pelearPokemon(){

  primerPokemon.pelear(objetoPokemon);
  console.log(primerPokemon);
}
//Obtener el valor de un select/option
