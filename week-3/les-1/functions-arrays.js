const food = [
  "lasagna",
  "pizza",
  "spaghetti",
  "sushi",
  "hamburger",
  "julientje",
  "hamburger",
  "kebab",
  "mac & cheese",
];

console.log(food[0]); // lasagne
console.log(food[2]); // spaghetti

console.log(food.indexOf("hamburger")); // 4
console.log(food.indexOf("tajine")); // -1

if (food.indexOf("tajine") >= 0) {
  console.log("Tajine zit in de array food");
} else {
  console.log("Tajine zit niet in de array food");
}

// bestaat het item in de array?
if (food.includes("kebab")) {
  console.log("Kebab zit in food array");
}

// bestaat de tekst in de string?
const sentence = "Hallo iedereen";
console.log(sentence.includes("een")); // true
console.log(sentence.includes("hallo")); // false
console.log(sentence.toLowerCase().includes("hallo")); // true
