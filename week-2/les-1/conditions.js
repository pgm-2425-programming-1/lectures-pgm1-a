const currentCourse = "Programming 1"; // string

if (currentCourse === "Programming 1") {
  console.log("We krijgen momenteel Programmeren 1");
} else {
  console.log("We krijgen momenteel een ander vak");
}

const isTuesday = false;

if (isTuesday) {
  console.log("Het is dinsdag");
} else {
  console.log("Het is niet dinsdag");
}

const x = 38; // number
if (x > 20 && x < 40) {
  // en
  console.log("Het getal is groter dan 20 EN kleiner dan 40");
}

const y = 10;
if (y > 20 || y < 40) {
  // of
  console.log("Het getal is groter dan 20 OF kleiner dan 40");
}
