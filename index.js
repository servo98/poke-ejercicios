const testButton = document.getElementById("testButton");
const promesasButton = document.getElementById("promesas");

//Obtenemos al div con id contenedor
const container = document.getElementById("contenedor");

testButton.addEventListener("click", () => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=200")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      /**
       * [{
       *  name -> nombre
       *  url -> url
       * }]
       */
      console.log(data.results);

      const arregloPromesas = data.results.map((pokeLink) => {
        return fetch(pokeLink.url);
      });

      console.log(arregloPromesas);

      Promise.all(arregloPromesas).then((resultado) => {
        //resultado es un [Response]
        const arregloPromesasJson = resultado.map((response) => {
          return response.json();
        });

        Promise.all(arregloPromesasJson).then((arregloPokemon) => {
          //arregloPokemons [pokemon]
          const arregloClasesPokemon = arregloPokemon.map((pokemon) => {
            return new Pokemon(
              pokemon.sprites.other["official-artwork"].front_default,
              pokemon.name,
              pokemon.types
            );
          });

          const pokemonDivs = arregloClasesPokemon.map((pokemonClass) => {
            return pokemonClass.toDiv();
          });

          container.append(...pokemonDivs);
        });
      });
    })
    .catch((error) => {
      console.log("Ocurrió un error al pedir data al API", error);
    });

  // const pokemon = new Pokemon(
  //   data.sprites.other["official-artwork"].front_default,
  //   data.name,
  //   data.types
  // );

  // const pokemonDiv = pokemon.toDiv();

  // container.appendChild(pokemonDiv);
});
