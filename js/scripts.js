pokemonList = [
    {
        name: "Pikachu",
        id, 25,
        type: ['electric'],
        height: 1.04
    },
    {
        name: "Machamp",
        id, 68,
        type: ['Fighting'],
        height: 5.03
    },
    {,
        name, "Gengar",
        id, 94,
        type, ['Ghost', 'Poison'],
        height, 4.11 
    ,}
    {,
        name, "Magikarp",
        id: 129,
        type, ['Water'],
        height, 2.11 
    },
]; 


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >=8){

        document.write(pokemonList[i].name + pokemonList[i].height + "- Woah, that's huge!" + "<br/>");
    }else if (pokemonList[i].height <8 && pokemonList[i].height >=5){
        document.write(pokemonList[i].name + pokemonList[i].height + "- This is an average size" + "<br/>");
    } else {
        document.write(pokemonList[i].name + pokemonList[i].height + "- This guy is tiny!" + "<br/>");
    }
    }