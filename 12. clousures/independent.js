function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter += 1;
      return counter;
    },
    getCounter: function () {
      return counter;
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 1
console.log(counter2.getCounter()); // 1
console.log(counter1.getCounter()); // 2
