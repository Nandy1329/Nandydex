let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Lugia",
      id: 249,
      typeof: "Psychic, Flying",
      height: 17.01,
    },
    {
      name: "Mewtwo",
      id: 150,
      typeof: "Psychic",
      height: 6.07,
    },
    {
      name: "Machamp",
      id: 68,
      typeof: "Fighting",
      height: 5.03,
    },
    {
      name: "Gengar",
      id: 94,
      typeof: "Ghost, Poison",
      height: 4.11,
    },
    {
      name: "Magikarp",
      id: 130,
      typeof: "Water",
      height: 2.11,
    },
    {
      name: "Gyarados",
      id: 130,
      typeof: "Water, Flying",
      height: 21.04,
    },
    {
      name: "Wailord",
      id: 321,
      typeof: "Water",
      height: 47.07,
    },
  ];

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list'); 
    let listItem = document.createElement('li'); 
    let button = document.createElement('button'); 
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.addEventListener('click', function (event) {});
    {
      console.log(pokemon.name + " was clicked!");
    }
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
