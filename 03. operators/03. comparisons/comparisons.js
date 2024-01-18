let a = 5;
let b = '5';
console.log(a == b); // true (la igualdad es verdadera)

let c = 5;
let d = '5';
console.log(c === d); // false (la igualdad estricta es falsa debido a los tipos diferentes)

let e = 5;
let f = '5';
console.log(e != f); // false (la desigualdad es falsa)

let g = 5;
let h = '5';
console.log(g !== h); // true (la desigualdad estricta es verdadera debido a los tipos diferentes)

let i = 10;
let j = 5;

console.log(i > j);  // true (10 es mayor que 5)
console.log(i < j);  // false (10 no es menor que 5)
console.log(i >= j); // true (10 es mayor o igual que 5)
console.log(i <= j); // false (10 no es menor o igual que 5)