const testButton = document.getElementById('testButton');
const promesasButton = document.getElementById('promesas');

//Obtenemos al div con id contenedor
const container = document.getElementById('contenedor');

testButton.addEventListener('click', () => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto1231231')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log('Ocurrió un error al pedir data al API', error);
    });

  // const pokemon = new Pokemon(
  //   data.sprites.other['official-artwork'].front_default,
  //   data.name,
  //   data.types
  // );

  // pokemon.print();

  // const pokemonDiv = pokemon.toDiv();

  // container.appendChild(pokemonDiv);
});
