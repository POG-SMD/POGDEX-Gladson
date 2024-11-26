async function gerarPokemon(num) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then(response => response.json())
        .then(json => {
            console.log({
                name: json.name,
                type1:json.types[0].type.name,
                type2:json.types[1].type.name,
                sprite:json.sprites.other.showdown.front_default
            })
        })
}
gerarPokemon(1)