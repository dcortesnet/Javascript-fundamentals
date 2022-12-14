let fruits = ["apple", "orange", "lemon"];
let fruitToSearch = "orange";

for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];

  if (fruit === fruitToSearch) {
    console.log(`has been found the ${fruit}`);
    break;
  }

  console.log(`The fruit ${fruit} don't match with ${fruitToSearch}`)
}

// -- Result --
// The fruit apple don't match with orange
// has been found the orange