
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

  return {
    getAll: getAll,
    add: add
  }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: 'charmander',
  height: 2
});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' tall ');
});






//for (let i = 0; i < pokemonList.length; i++) {
  //if (pokemonList[i].height < 5 && pokemonList[i].height > 1) {
    //document.write("<p>" + pokemonList[i].name + ' height ' + pokemonList[i].height + " this is an average Pokemon </p>");
  //}else if (pokemonList[i].height > 5) {
    //document.write("<p>" + pokemonList[i].name + ' height ' + pokemonList[i].height + " this is a large Pokemon </p>");
  //}else {
    //document.write("<p>" + pokemonList[i].name + ' height ' + pokemonList[i].height + " this is a small Pokemon </p>");
  //}
//}
