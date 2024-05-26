function createFunctions() {
  let counter = 0;

  function increment() {
    counter += 1;
    return counter;
  }

  function decrement() {
    counter -= 1;
    return counter;
  }

  function getValue() {
    return counter;
  }

  return {
    increment,
    decrement,
    getValue,
  };
}

const myFunctions = createFunctions();

console.log(myFunctions.increment()); // 1
console.log(myFunctions.increment()); // 2
console.log(myFunctions.decrement()); // 1
console.log(myFunctions.getValue()); // 1
