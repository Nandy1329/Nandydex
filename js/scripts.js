let pokemonRepository = (function () {
  //IIFE (Immediately Invoked Function Expression)

  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151"; //API URL

  function add(pokemon) {
    if (
      typeof pokemon === "object" && //checks if pokemon is an object) {
      "name" in pokemon &&
      "detailsUrl" in pokemon &&
      "id" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon cannot be be pushed to the pokemonList");
    }
  }
  function loadList() {
    //fetches pokemon list from API
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let count = 1;
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            id: count,
          };
          add(pokemon);
          count = count + 1;
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function getAll() {
    //returns pokemonList
    return pokemonList;
  }

  function loadDetails(item) {
    //used to load details for each pokemon
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        //adds details to the item
        item.imageUrl = details.sprites.front_default;
        item.id = details.id;

        item.height = details.height;
        item.weight = details.weight;

        item.types = details.types;
        if (details.types.length === 2) {
          item.types[0] = details.types[0].type.name;
          item.types[1] = details.types[1].type.name;
        } else {
          item.types[0] = details.types[0].type.name;
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    //shows details of pokemon
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function addListItem(pokemon) {
    //adds pokemon to the DOM
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");

    button.innerText =
      "#${pokemon.id} ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}";
    button.classList.add("list-button");
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  return {
    //returns functions
    add: add,
    loadList: loadList,
    getAll: getAll,
    loadDetails: loadDetails,
    showDetails: showDetails,
    addListItem: addListItem,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
