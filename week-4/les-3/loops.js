function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// for-loop (een stukje code 0 of aantal keer laten uitvoeren)
for (let i = 0; i < 10; i++) {
  // code block
  console.log(i);
}

// for-loop (array overlopen)
const items = ["item 1", "item 2"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

console.log("-----------------------------------------");

// do ... while -> minstens 1x
const randomNum = 7;
let guess;
do {
  guess = generateRandomNumber(10);
  console.log(guess);
} while (guess !== randomNum);

console.log("-----------------------------------------");

// while -> minstens 0x
guess = null;
while (guess !== randomNum) {
  guess = generateRandomNumber(10);
  console.log(guess);
}
