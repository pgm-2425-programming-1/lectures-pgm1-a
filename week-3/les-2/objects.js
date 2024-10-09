const shoe = {
  size: 10, // property
  color: "red",
  brand: "New Balance",
  model: "9060",
  price: {
    original: 140,
    discount: 120,
  },
  inStock: true,
};

console.log(`Dit is een schoen van ${shoe.brand} in maat ${shoe.size}`);

const shoes = [
  {
    size: 10, // property
    color: "red",
    brand: "New Balance",
    model: "9060",
    price: {
      original: 140,
      discount: 120,
    },
    inStock: true,
  },
  {
    size: 11,
    color: "blue",
    brand: "Nike",
    model: "Air Max 1",
    price: {
      original: 160,
      discount: 140,
    },
    inStock: true,
  },
];

for (const shoe of shoes) {
  console.log(`Dit is een schoen van ${shoe.brand} in maat ${shoe.size}`);
}

const pet = {
  type: "cat",
  name: "Misty",
  colors: ["black", "white"],
  cutenessLevel: 9,
};

console.log(pet);
pet.cutenessLevel += 1; // van 9 naar 10
console.log(pet);

// property verwijderen
delete pet.cutenessLevel;
console.log(pet);
