let pokemonList = [
    {
      name: "Lugia",
      id: 249,
      type: ["Psychic", "Flying"],
      height: 17.04
    },
    {
      name: "Machamp",
      id: 68,
      type: ["Fighting"],
      height: 5.03
    },
    {
      name: "Gengar",
      id: 94,
      type: ["Ghost", "Poison"],
      height: 4.11
    },
    {
      name: "Magikarp",
      id: 129,
      type: ["Water"],
      height: 2.11
    },
    {
      name: "Wailord",
      id: 321,
      type: ["Water"],
      height: 47.07
    }
  ];
  
  for (let i = 0; i < pokemonList.length; i++) {
    document.write("#" + pokemonList[i].id + " " + pokemonList[i].name + "<br>");
    if (pokemonList[i].type.length > 1) {
      document.write(
        `(Types: ${pokemonList[i].type[0]}, ${pokemonList[i].type[1]}) - Wow! This pokemon has two types!` +
          "<br>"
      );
    } else {
      document.write(`(Type: ${pokemonList[i].type})` + "<br>");
    }
  
    if (pokemonList[i].height >= 20) {
      document.write(
        `(Height: ${pokemonList[i].height} ft) - Wow, thats HUGE!` + "<br>"
      );
    } else {
      document.write(`(Height: ${pokemonList[i].height} ft)` + "<br>");
    }
    document.write("<br>");
  }
  