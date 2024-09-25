// dit is een console log
console.log("Hallo iedereen");

console.log("Dit is een tweede console log");

let name = "Joanna"; // string

console.log("Hallo " + name);
console.log("Hoe gaat het " + name + "?");

name = "Bert";

console.log("Hallo " + name);
console.log("Hoe gaat het " + name + "?");

const age = 30; // number
const isHuman = true; // boolean -> true or false

console.log("Meneer " + name + " is " + age + " jaar oud");
console.log(`Meneer ${name} is ...
  ${age} jaar oud`);

let name2;
console.log(name2); // undefined
name2 = "Frank"; // string
console.log(name2);

let day = 25;
console.log("Vandaag is het " + day + " september");
const tomorrow = day + 1; // 26
console.log("Morgen is het " + tomorrow + " september");
const yesterday = day - 1; // 24
console.log("Gisteren was het " + yesterday + " september");

// kebab case
// const the-day-yesterday = day - 1;
// snake case
const the_day_yesterday = day - 1;
// pascal case
const TheDayYesterday = day - 1;
// camel case -> dit gebruiken wij!
const theDayYesterday = day - 1;
