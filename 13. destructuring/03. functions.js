function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = {
  name: "Alice",
  age: 25,
};

greet(person); // Hello, my name is Alice and I am 25 years old.
