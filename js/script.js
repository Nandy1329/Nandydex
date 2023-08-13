let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //load list of pokemon from the api url, when/ if loaded calls add() function to push items to pokemonList array

  //adds a new pokemon to the end of the list
  function add(Pokemon) {
    //checks if the new pokemon obj has the same properties as the first pokemon on the list (our default). If it does then it can push
    if (
      typeof Pokemon === "object" &&
      "name" in Pokemon &&
      "detailsUrl" in Pokemon
    ) {
      pokemonList.push(Pokemon);
    } else console.log("Error - pokemon is not correct");
  }
}
  //returns whole pokemon list
  function getAll(): {
    return pokemonList;
  }

  //loads details of the pokemon from the detailsUrl, then adds them to the pokemon object

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        //adds preview image
        pokemon.previewImageUrl = details.sprites.front_default;

        //adds front image
        pokemon.imageUrl =
          details.sprites.other["official-artwork"].front_default;
        //adds back image
        pokemon.imageUrlBack =
          details.sprites.other["official-artwork"].front_shiny;

        pokemon.height = details.height;

        //adds types to the pokemonTypesArray, which then become accessible through pokemon.types
        let pokemonTypesArray = [];

        details.types.forEach((type) => {
          pokemonTypesArray.push(type.type.name);
        });
        pokemon.types = pokemonTypesArray;
      })
      .catch(function (e) {
        console.error(e);
      });
  }


  //logs pokemon details to console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      // console.log(pokemon);
      showModal(pokemon);
    });
    // console.log(pokemon.name, pokemon.detailsUrl);
  }

  //adds html element (li & button) to every pokemon of the list
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    //creates li and button (button goes inside the li)
    let pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card", "pokemon-card");
    let pokemonCardImg = document.createElement("img");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-primary"); //adds bootstrap classes to the button
    button.setAttribute("data-target", "#pokemonModal"); // targets the modal
    button.setAttribute("data-toggle", "modal"); // toggles the modal
    pokemonCardImg.classList.add("card-img-top", "pokemon-img");
    pokemonCardImg.src = pokemon.previewImageUrl;
    pokemonCard.appendChild(pokemonCardImg);
    pokemonCard.appendChild(button);
    pokemonList.appendChild(pokemonCard);
    // pokemonCard.appendChild(button);");
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
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
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) { // detailing items
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;// height
      item.weight = details.weight; // weight
      item.types = details.types; // types
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      const modalContainer = document.getElementById("#modal-container");
      const modalTitle = document.getElementById("#modal-title");
      const modalHeight = document.getElementById("#modal-height");
      const modalWeight = document.getElementById("#modal-weight");
      const modalTypes = document.getElementById("#modal-types");
      const modalImage = document.getElementById("#modal-image");
      const modalClose = document.getElementById("#modal-close");
    
      modalTitle.textContent = "Name: " + item.name;
      modalHeight.textContent = "Height: " + item.height;
      modalWeight.textContent = "Weight: " + item.weight;
      modalTypes.textContent = "Types: " + item.types;
      modalImage.src = item.imageUrl;
      modalContainer.classList.add("is-visible");
      modalHeight.style.marginTop = "10px"; // margin top
      
      modalImage.setAttribute("src", item.imageUrl);
      modalImage.setAttribute("alt", item.name);

      modalClose.addEventListener("click", function () {
        hideModal();
     modalContainer.addEventListener("click", function (e) {
       let target = e.target;
       if (target === modalContainer) {
         hideModal();
       }
     }
  }
  
  function hideModal() {
    const modalContainer = document.getElementById("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

 function filterPokemonList(searchQuery) {
  let filteredList = pokemonList.filter(function (pokemon) => {
    return pokemon.name.includes(searchQuery);
    displayPokemonList(filteredList);
  }
 
  function displayPokemonList(filteredList) {
    let pokemonList = document.querySelector(".pokemon-list");
    pokemonList.innerHTML = "";
    filteredList.forEach(function (pokemon) {
      addListItem(pokemon);
    });
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    filterPokemonList: filterPokemonList,
    displayPokemonList: displayPokemonList
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});}