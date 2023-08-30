let object1 = { value: 10 };
let object2 = object1;
object2.value = 20;

console.log(object1.value); // Output: 20
console.log(object2.value); // Output: 20

let array1 = [1, 2, 3];
let array2 = array1;
array2[0] = 99;

console.log(array1[0]); // Output: 99
console.log(array2[0]); // Output: 99