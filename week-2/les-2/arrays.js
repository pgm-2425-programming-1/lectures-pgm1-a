const todos = [
  "Naar huis gaan", // 0
  "Eten",
  "Naar Ikea gaan",
  "Kookles",
  "Studeren",
  "Schoenen kiezen voor morgen",
  "Slapen",
];

console.log(todos.length);
console.log("Het laatste item is " + todos[todos.length - 1]);

for (const todo of todos) {
  console.log(todo);
}

// iets toe voegen
todos.push("De vaatwas legen");
console.log(todos.length);
console.log("Het laatste item is " + todos[todos.length - 1]); // De vaatwas legen

let content = "Onze to-do lijst: \n";
for (const todo of todos) {
  content += "• " + todo + "\n";
}
console.log(content);

// math
let x = 10;
x += 2;
console.log(x);
x -= 1;
console.log(x);

const sentence = "Dit is een zin";
const words = sentence.split(" "); // van string naar array
console.log(words);
const fullSentence = words.join(" ");
console.log(fullSentence);
