let firstName = "Bruno"; // string
console.log("Hallo " + firstName);
firstName = "Akdenis";
console.log("Hallo " + firstName);

const x = 10; // number
const y = 20; // number
const total = x + y;
console.log(total);
console.log(x - y);

console.log("10" + 20);

const l = 20;
if (l >= 30) {
  console.log("L is groter dan of gelijk aan 30");
} else if (l === 20) {
  console.log("L is exact 20");
} else {
  console.log("L is niet groter dan 30 of niet 20");
}

const color = "blue";
if (color !== "blue") {
  // niet
  console.log("De kleur is niet blauw");
}

const otherColor = "yellow";
if (color === "blue" && otherColor === "black") {
  // en
  console.log("De kleuren zijn blauw én zwart");
}

if (color === "blue" || otherColor === "black") {
  // of
  console.log("De kleur is blauw OF zwart");
}
