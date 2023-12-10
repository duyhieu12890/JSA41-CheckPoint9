pokemoShow();

function pokemoShow() {
    for (let index = 1; index < 500; index++) {
        //Do so con pokemon qua nhieu nen chi lay gioi
        //han la 100 con (1 --> 500)
        getPokemonSelection(index);
    }
}

async function getPokemonSelection(pokemonId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        console.log(data.name, ' Loaded');
        const node = document.createElement("option");
        node.value = pokemonId;
        node.id = data.name;
        const textNode = document.createTextNode(data.name);
        node.appendChild(textNode);
        document.getElementById('pokemon').appendChild(node);
    } catch (error) {
        return ('Khong co mo ta');
    };
};
const results = document.getElementsByClassName('isShow')[0];

function getPokemonValue() {
    var selected = document.getElementById('pokemon');
    var searchValue = selected.value;
    getPokemonInfo(searchValue);
}
const namePokemon = document.getElementById('name');
const typepokemon = document.getElementById('type');
const heightPokemon = document.getElementById('height');
const wightPokemon = document.getElementById('weight');
const biopokemon = document.getElementById('bio');
const imgpokemon = document.getElementById('img')
async function getPokemonInfo(pokemonCount) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCount}`);
        const data = await response.json();
        results.style.display = 'block';
        console.log('User request view ', data.name);
        namePokemon.innerHTML = data.name;
        typepokemon.innerHTML = data.types[0].type.name + ',' + data.types[1].type.name;
        heightPokemon.innerHTML = data.height + ' inches';
        wightPokemon.innerHTML = data.weight + ' inches';
        imgpokemon.src = data.sprites.front_default;
        // biopokemon.innerHTML = data.flavor_text_entries.find(entry => entry.language.name === "en").flavor_text;
        getPokemonBio(pokemonCount);
    } catch (error) {
        // alert('Cannot get info this pokemon');
    }
};

async function getPokemonBio(pokemonCount) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonCount}`);
        const data = await response.json();
        biopokemon.innerHTML = data.flavor_text_entries.find(entry => entry.language.name == "en").flavor_text;
    } catch (error) {
        alert('Cannot get bio this pokemon');
    }
}