let api = "https://pokeapi.co/api/v2/pokemon/"
const listaPokemon = document.querySelector("#listaPokemon")
let pokemons = []

const getPokemons = async () => {
    for (let i = 1; i <= 151; i++) {
        const response = await fetch(api + i)
        // console.log(response)
        const results = await response.json()
        // console.log(results)
        pokemons.push(results)
    }
}
getPokemons()
// console.log(pokemons)

const mapearPokemon = (pokemons) => {
    const pokemonMapeados = pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        tipo: pokemon.types,
        peso: pokemon.weight,
        altura: pokemon.height,
    }))
    return pokemonMapeados
}
console.log(pokemons)

const pintarPokemon = (pokemons) => {
    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML = `<p class="pokemon-id-back">#025</p>
    <div class="pokemon-img">
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt=Pikachu">
    </div>
    <div class="pokemon-info">
        <div class="pokemon-contenedor">
            <p class="pokemon-id">#025</p>
            <h2 class="pokemon-nombre">Pikachu</h2>
        </div>
        <div class="pokemon-tipos">
            <p class="electric tipo">electric</p>
            <p class="fighting tipo">fighting</p>
        </div>
        <div class="pokemon-stats">
            <div class="stat">4m</div>
            <div class="stat">60kg</div>
        </div>
    </div>`
    listaPokemon.append("div")
}

const init = async () => {
    const pokemon = await getPokemons()
    const pokemonMapeados = mapearPokemon(pokemon)
    pintarPokemon(pokemonMapeados)
}
