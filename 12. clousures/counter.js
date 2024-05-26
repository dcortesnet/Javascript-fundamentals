function createCounter() {
  let count = 0; // Variable local que puede ser accesible por la closure

  // Closure
  return function () {
    count += 1;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
