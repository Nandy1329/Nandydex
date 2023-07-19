let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Lugia",
      id: 249,
      typeof: "Psychic, Flying",
      height: 17.01
    },
    {
      name: "Mewtwo",
      id: 150,
      typeof: "Psychic",
      height: 6.07
    },
    {
      name: "Machamp",
      id: 68,
      typeof: "Fighting",
      height: 5.03
    },
    {
      name: "Gengar",
      id: 94,
      typeof: "Ghost, Poison",
      height: 4.11
    },
    {
      name: "Magikarp",
      id: 130,
      typeof: "Water",
      height: 2.11
    },
    {
      name: "Gyarados",
      id: 130,
      typeof: "Water, Flying",
      height: 21.04
    },
    {
      name: "Wailord",
      id: 321,
      typeof: "Water",
      height: 47.07
    }
  ];

    return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
  })();

document.write("<br>"); //begin new line height

pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonDetails = pokemon.name + " (height: " + pokemon.height + ")";

  if (pokemon.height > 30) {
    pokemonDetails += " - Wow, that's HUGE!";
  }
  document.write ('<br><br>')
  document.write(pokemonDetails + "<br>");
});
