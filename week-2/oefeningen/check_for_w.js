const str2 = "don't knoW why";

const characters = str2.split("");

let hasW = false;

for (const char of characters) {
  if (char.toLowerCase() === "w") {
    hasW = true;
  }
}

if (hasW) {
  console.log("Ja");
} else {
  console.log("Nee");
}
