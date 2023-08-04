let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"; //API URL

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
  let correctKeys= ["name"];
  let objectKeys= Object.keys(pokemon);
  if (typeof pokemon === "object" && correctKeys[0] === objectKeys[0]) {
      // && correctKeys[1] === objectKeys[1] {
      // && correctKeys[2] === objectKeys[2] ) {
    pokemonList.push(pokemon);
   } 
  }

  function addListItem(pokemon) {
    let pokemonListItems = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);
    button.addEventListener("click", function ()
     {

      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalContainer = document.querySelector("#modal-container");
   modalContainer.innerHTML = "";

   let modal = document.createElement("div");
    modal.classList.add("modal");


    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement("p");
    contentElement.innerText = "Height: " + pokemon.height;

  if (pokemon.imageUrl) {
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
      if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
        hideModal();
      }
    });
  
    modalContainer.addEventListener("click", (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  };


  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  function loadList() {
    return fetch(apiUrl)
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
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

    
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});}) 
