const aliceAge = parseInt(prompt("choose number"));

if (aliceAge < 18) {
  console.log("Alice is minor than 18 years.");
} else if (aliceAge >= 18 && aliceAge <= 21) {
  console.log("Alice has between 18 and 21 years.");
} else {
  console.log("Alice has more than 21 years.");
}