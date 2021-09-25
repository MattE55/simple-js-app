let pokemonList = [
  {name:"bulbasaur",type:["grass","poison"], height:2},
  {name:"pikachu",type:"electric",height:0.9},
  {name:"machamp",type:"fighting",height:6}
  ]
console.log(pokemonList)

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <5 && pokemonList[i].height >1){
    console.log(pokemonList[i].name + " is an average Pokemon");
  }else if (pokemonList[i].height >5){
    console.log(pokemonList[i].name + " is a large Pokemon");
  }else {
    console.log(pokemonList[i].name + " is a small Pokemon");
  }
}
document.write(pokemonList)

let repository = [
  {
    name: "bulbasaur",
    height: 2,
    type: ["grass", "poison"]
  },
  {
    name: "pikachu",
    height: 0.9,
    type: ["electric"]
  },
  {
    name: "machamp",
    height: 6,
    type: ["fighting"]
  }
]
