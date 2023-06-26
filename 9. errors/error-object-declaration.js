const myError = new Error('My Error');

//console.log(myError.name);     // "Error"
//console.log(myError.message);  // "My Error"
//console.log(myError.stack);    // Stack trace del error

//throw new Error("My Error");


try {
  throw new Error("Ups");
  console.log('This code will never be executed.');
  console.log('This code will never be executed.');
  console.log('This code will never be executed.');
  console.log('This code will never be executed.');
  console.log('This code will never be executed.');
  console.log('This code will never be executed.');
  console.log('This code will never be executed.');
} catch (error) {
  console.log(error.message); // Ups
}


try {
  // Code with Error
} catch (error) {
  if (error instanceof TypeError) {
    console.log("TypeError");
  } else if (error instanceof ReferenceError) {
    console.log("ReferenceError");
  } else {
    console.log("Error");
  }
}






