let pokemonList = [
  {name: "bulbasaur",type:[ "grass","poison"], height: 2},
  {name: "pikachu",type: "electric", height: 0.9},
  {name: "machamp",type: "fighting", height: 6},
  ]



for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 5 && pokemonList[i].height > 1) {
    document.write("<p>" + pokemonList[i].name + ' height ' + pokemonList[i].height + " this is an average Pokemon </p>");
  }else if (pokemonList[i].height > 5) {
    document.write("<p>" + pokemonList[i].name + ' height ' + pokemonList[i].height + " this is a large Pokemon </p>");
  }else {
    document.write("<p>" + pokemonList[i].name + ' height ' + pokemonList[i].height + " this is a small Pokemon </p>");
  }
}
