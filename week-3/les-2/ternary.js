// ternary = kortere manier om een if/else te schrijven

const hour = 9;
if (hour > 12) {
  console.log("Het is namiddag");
} else {
  console.log("Het is voormiddag");
}

console.log("Het is " + (hour > 12 ? "namiddag" : "voormiddag"));
