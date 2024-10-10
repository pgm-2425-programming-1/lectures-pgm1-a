const players = ["Kevin De Bruyne", "Romelu Lukaku", "Simon Mignolet", "Maxim De Cuyper", "Hans Vanaken"];
console.log(players);

let tempStr = "";
players.forEach(function (player) {
  tempStr += " • " + player;
});
console.log(tempStr);

tempStr = "";
for (const player of players) {
  tempStr += " • " + player;
}
console.log(tempStr);
