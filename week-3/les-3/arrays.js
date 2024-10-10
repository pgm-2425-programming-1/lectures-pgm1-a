const instruments = ["gitaar", "cello", "drum", "contrabas", "piano", "saxofoon"];

/*
 * weten wat functie doet (te kennen)
 */
instruments.push("mondharmonica"); // op het einde van de array iets toe
console.log(instruments); // ["gitaar", ..., "mondharmonica"]

const text = instruments.join(" - "); // array omvormen naar string
console.log(text);

const deleted = instruments.pop(); // verwijderen we het laatste item uit een lijst
console.log(instruments);
console.log(deleted); // "mondharmonica"

instruments.shift(); // verwijder het eerste item uit een lijst
console.log(instruments);

/*
 * weten dat functie bestaat (opzoeken bij gebruik)
 */
instruments.unshift("vleugelpiano"); // voeg een element toe aan het begin van de array
console.log(instruments);

instruments.splice(2, 0, "viool"); // voeg toe op bepaalde plek in array
console.log(instruments);

instruments.splice(2, 1); // verwijder één element vanaf index 2
console.log(instruments);

const extraInstruments = ["kazoo", "harp"];
const allInstruments = instruments.concat(extraInstruments);
console.log(instruments);
console.log(allInstruments);

const part = instruments.slice(2, 4); // van index 2 tot 4 (niet tot en met)
console.log(part);
