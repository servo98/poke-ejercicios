const testButton = document.getElementById('testButton');
//Obtenemos al div con id contenedor
const container = document.getElementById('contenedor');

testButton.addEventListener('click', () => {
  fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then((response) => {
      //Convierte de respuesta a JSON
      return response.json();
    })
    .then((data) => {
      //Hacer un div en forma de carta
      //meter img, nombre y otros datos

      const pokemon = new Pokemon(
        data.sprites.other['official-artwork'].front_default,
        data.name,
        data.types
      );

      pokemon.print();

      const pokemonDiv = pokemon.toDiv();

      container.appendChild(pokemonDiv);
    });
});
