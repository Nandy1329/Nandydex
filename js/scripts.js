let pokemonRepository = (function () {  // IIFE
  let pokemonList = [];
  let apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  function getAll() {   // function to return pokemonList
    return pokemonList;
  }

  function add(pokemon) {
    let correctKeys = ["name"];
    let objectKeys = Object.keys(pokemon);
    if (typeof pokemon === "object" && correctKeys[0] === objectKeys[0]) {
      // && correctKeys[1] === objectKeys[1]
      // && correctKeys[2] === objectKeys[2] ) {
      pokemonList.push(pokemon);
    }
  }
  function addListItem(pokemon) { // function to add pokemon to list
    let pokemonListItems = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) { // function to show details of pokemon
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) { // function to show modal
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement("p");
    contentElement.innerText = "Height " + pokemon.height;

    if (pokemon.imageUrl) { // if statement to check if image exists
      let pokemonImage = document.createElement("img");
      pokemonImage.setAttribute("src", pokemon.imageUrl);
      pokemonImage.setAttribute("height", "300");
      pokemonImage.setAttribute("width", "300");
      pokemonImage.setAttribute("alt", "image of " + pokemon.name);
      modal.appendChild(pokemonImage);
    }

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

    window.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        modalContainer.classList.contains("is-visible")
      ) {
        hideModal();
      }
    });

    modalContainer.addEventListener("click", (e) => { // event listener to close modal
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }
  function hideModal() { // function to hide modal
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  function loadList() { // function to load list of pokemon
    return fetch(apiURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  return { // return functions
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) { // forEach loop to add pokemon to list
  pokemonRepository.addListItem(pokemon); // forEach loop to add pokemon to list
});

pokemonRepository.loadList().then(function () { 
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
