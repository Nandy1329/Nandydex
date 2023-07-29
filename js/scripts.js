let pokemonRepository = (function () { //IIFE

  let pokemonList = []; 
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/;


  function add(pokemon) {
    if (
      typeof pokemon === "object") { 
        "name" in pokemon &&
        "detailsUrl" in pokemon 
    ) {
        pokemonList.push(pokemon);
    } else {
      console.log("pokemon cannot be be pushed to the pokemonList")
  }


  function loadList() //fetches pokemon list from API  
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }


  function getAll()) { //returns pokemonList
    return pokemonList;
  }

  function loadDetails (item) { //used to load details for each pokemon
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) { //adds details to the item
        item.imageUrl = details.sprites.front_default; 
        item.height = details.height;
        item.weight = details.weight;

        item.types = details.types;
        if (details.types.length === 2) {
            item.types[0] = details.types[0].type.name;
            item.types[1] = details.types[1].type.name
        } else {
            item.types[0]= details.types[0].type.name;
        }
    }).catch(function (e) {
        console.error(e);
    })
}

function addListItem(pokemon) { //adds pokemon to the DOM
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  
  button.innerText = '#${pokemon.name}';
 
  button.classList.add("button-class");
  button.addEventListener("click", function (event) {
    showDetails(pokemon);
  });
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}
return { //returns functions
  add: add,
  loadList: loadList,
  getAll: getAll,
  loadDetails: loadDetails,
  showDetails: showDetails,
  addListItem: addListItem,
}
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})
