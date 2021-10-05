
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'bulbasaur',
      type: ['grass','poison'],
      height: 2
    },
    {
      name: 'pikachu',
      type: 'electric',
      height: 0.9
    },
    {
      name: 'machamp',
      type: ['fire','flying'],
      height: 6
    }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    //button.addEventListener('click', function showDetails
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon.name)
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: 'charmander',
  type: 'fire',
  height: 2
});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
