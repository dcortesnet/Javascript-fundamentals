const fetchPokemon = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const pokemon = ["Pikachu"];
    const search = pokemon.find((poke) => poke === name);
    if (search) {
      resolve("Resolve: Pokemon encountered")
    }
    reject("Reject: Pokemon not found");
  }, 2000);
});


fetchPokemon("Pikachu")
  .then(response => console.log(response))
  .catch(error => console.log(error));
// ✅ Resolve: The Pokemon Pikachu is found

fetchPokemon("Bulbasaur")
  .then(response => console.log(response))
  .catch(error => console.log(error));
// ❌ Reject: The Pokemon Bulbasaur is not found