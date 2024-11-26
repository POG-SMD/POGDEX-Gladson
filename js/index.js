async function gerarPokemon(num) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const json = await response.json()
    return {

        name: json.name,
        sprite: json.sprites.other.showdown.front_default
    }
}
async function setPokemonImg(num) {
    const main = document.getElementById('root')
    const pokemon = await gerarPokemon(num)

    main.innerHTML = `
    <article>
        <h2 id="title">${pokemon.name}</h2>
        <img id="card" src="${pokemon.sprite}" alt="card">
    </article>
    `
}

setPokemonImg(1)