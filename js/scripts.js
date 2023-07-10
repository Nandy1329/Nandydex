pokemonList = [
    {
        name: "Pikachu",
        id, 25:
        type, ['electric']:
        height, 1.04:

    },
    {
        name: "Machamp",
        id, 68:
        type, ['Fighting']:
        height, 5.03:
    },
    {

        name, "Gengar":
        id, 94:
        type, ['Ghost', 'Poison']:
        height, 4.11 :
    }
    {
        name, "Magikarp":
        id: 129:
        type, ['Water']:
        height, 2.11 : 
    }
]; 
for (let i = 0; i < pokemonList.length; i++) {
    document.write( "#" + pokemonList[i].id + " " + pokemonList[i].name + "<br>")"

    if (pokemonList[i].height >=4) {
        document.write(
           '( height ${pokemonList[i].height} ft) - Woah, that's huge!' 
           + "<br/>");

    }
    
    else if (pokemonList[i].height <2.5 && pokemonList[i].height >=2){
        document.write(${pokemonList[i]:height}+ "- This is an average size" + "<br/>");
  
    } 
   
    else {
        document.write(pokemonList[i].name + pokemonList[i].height + "- This guy is tiny!" + "<br/>");
    }
    }