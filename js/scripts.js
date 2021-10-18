let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon,
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct")
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = $(".pokemon-list");
    let listPokemon = $("<li></li>");
    let button =
    $('<button class="button-class" data-target="#pokemonModal" data-toggle="modal">' +
    pokemon.name + "</button>");
    button.click(function(){
    showDetails(pokemon);
    });

    listPokemon.append(button);
    pokemonList.append(listPokemon);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // add the details to the item
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.abilities = details.abilities;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    //let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrlBack);
    let heightElement = $("<p>" + "height : " + item.height + "</p>");
    let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
    let typesElement = $(
      "<p>" +
        "types : " +
        item.types.map((singleType) => singleType.type.name).join(", ") + "</p>");
    let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
