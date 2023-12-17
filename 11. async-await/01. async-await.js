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

async function execute() {
  try {
    console.log('Start task find pokemon');
    const result = await fetchPokemon("Pikachus");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log('End task find pokemon');
}

console.log('First task')
execute();
console.log('Other task1');
console.log('Other task2');
console.log('Other task3');
console.log('Other task4');
console.log('Other task5');