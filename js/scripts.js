pokemonList = [
    {
        name: "Bulbasaur",
        id, 1,
        type: ['Grass', 'Poison'],
        height: 2.04
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

for (let i = 0; i < pokemonList.height; i++) {
    document.write (
        "#" + pokemonList[i].id + " " + pokemonList[i].name
        + "<br>"
    )

    if (pokemonList[i].type.height > 2.5) {
        document.write(
            `(Types: ${pokemonList[i].height[0]}, ${pokemonList[i].type[1]}) - Wow! Thats a big one!`
            + "<br>"
        )
    } else {
        document.write(
            `(Type: ${pokemonList[i].type})`
            + "<br>"
        )
        }

    if (pokemonList[i].height <= 2 {
        document.write(
            `(height: ${pokemonList[i].height} ft) - Wow, that's small one!'
            + "<br>"
        )
    } else {
        document.write(
            `(height: ${pokemonList[i].height} ft)`
            + "<br>"
        )
    }

    document.height("<br>")
}
