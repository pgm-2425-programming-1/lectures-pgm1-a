const thingsToEat = [
  "spaghetti", // 0
  "kebab", // 1
  "witloof", // 2,
  "bloemkool", // 3
];

console.log(thingsToEat[0]);
console.log(thingsToEat[3]);
console.log(thingsToEat[4]); // undefined

thingsToEat.push("broccoli");
console.log(thingsToEat[4]); // broccoli

// array te overlopen
const number = 10;
for (const thing of thingsToEat) {
  console.log(number);

  if (thing === "bloemkool") {
    console.log("Item is " + thing);
  }
}

let text = "";
for (const thing of thingsToEat) {
  text += `• Ik eet ${thing}
  `;
}
console.log(text);

const laptop = {
  brand: "Lenovo",
  model: "Legeon",
  price: {
    original: 1200,
    discountPrice: 1100,
  },
};

console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.price.original);
console.log(laptop.price.discountPrice);

console.log(`We hebben een laptop van het merk ${laptop.brand} en model ${laptop.model}`);
