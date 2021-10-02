//let pokemonList = [
  //{name: "bulbasaur",type:[ "grass","poison"], height: 2},
  //{name: "pikachu",type: "electric", height: 0.9},
  //{name: "machamp",type: "fighting", height: 6},
  //]


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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

document.write(pokemonRepository.getAll());
pokemonRepository.add({ name: 'bulbasaur' });
document.write(pokemonRepository.getAll());

pokemonList.forEach(function(pokemon) {
  document.write(pokemonList.name + ' is ' + pokemonList.height + ' tall ');
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
