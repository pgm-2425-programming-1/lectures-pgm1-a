const artist1 = "Mozart";
const artist2 = "Beethoven";
const artist3 = "Hans Zimmer";
const artist4 = "Eminem";
const artist5 = "Gloryhammer";
const artist6 = "System of a Down";
const artist7 = "Taylor Swift";
const artist8 = "Kanye West";
const artist9 = "Bjork";
const artist10 = "Queens of the Stone Age";

// niet handig...
console.log(artist1 + " is een artiest");
console.log(artist2 + " is een artiest");
console.log(artist3 + " is een artiest");

// array
const artists = [
  "Mozart", // index 0
  "Beethoven", // 1
  "Hans Zimmer", // 2
  "Eminem", // 3
  "Gloryhammer", // 4
  "System of a Down", // 5
  "Taylor Swift", // 6
  "Kanye West", // 7
  "Bjork", // 8
  "Queens of the Stone Age", // 9
];

console.log(artists[0] + " is een artiest");
console.log(artists[1] + " is een artiest");
console.log(artists[2] + " is een artiest");
console.log("---------------------------");

// for ... of
for (const artist of artists) {
  console.log(artist + " is een artiest");
}
