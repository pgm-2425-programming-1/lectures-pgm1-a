// oefening 16 van week 1
let genderCode = 1;

let message = "";

switch (genderCode) {
  case 1:
    message = "Man";
    break;
  case 2:
    message = "Vrouw";
    break;
  case 3:
    message = "X";
    break;
  case 9:
    message = "Niet toepasbaar";
    break;
  case 0:
  default:
    message = "Niet gekend";
    break;
}

/* if (genderCode === 0) {
  message = "Niet gekend";
} else if (genderCode === 1) {
  message = "Man";
} else if (genderCode === 2) {
  message = "Vrouw";
} else if (genderCode === 3) {
  message = "X";
} else if (genderCode === 9) {
  message = "Niet toepasbaar";
} else {
  message = "Niet gekend";
} */

console.log(`Gendercode: ${genderCode}. Je bent een: ${message}`);
