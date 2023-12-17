const myError = new Error("My Error");

try {
  throw new Error("Ups");
  console.log("This code will never be executed.");
  console.log("This code will never be executed.");
  console.log("This code will never be executed.");
  console.log("This code will never be executed.");
  console.log("This code will never be executed.");
  console.log("This code will never be executed.");
  console.log("This code will never be executed.");
} catch (error) {
  console.log(error.message); // Ups
} finally {
  console.log("finally");
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
} finally {
  console.log("finally");
}
