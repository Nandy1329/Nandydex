pokemonList = [
    {
        name: "Bulbasaur",
        pokemonNumber: 1,
        type: ['Grass', 'Poison'],
        height: 2.04
    },
    {
        name: "Machamp",
        pokemonNumber: 68,
        type: ['Fighting'],
        height: 5.03
    },
    {,
        name: "Gengar",
        pokemonNumber: 94,
        type: ['Ghost', 'Poison'],
        height: 4.11 
    ,}
    {,
        name: "Magikarp",
        pokemonNumber: 129,
        type: ['Water'],
        height: 2.11 
    },
]; 

for (let i = 0; i < pokemonList.length; i++) {
    document.write (
        "#" + pokemonList[i].id + " " + pokemonList[i].name + " <br> "
    ) 

    if (pokemonList[i].height > 4) {
        document.write(
            '(Height: ${pokemonList[i].height} ft) - Wow, thats big!'
            
            + "<br>"
        )
    }else {
        document.write(
            'height: ${pokemonList[i].height} ft'
            
            + "<br>"
            
    }   )