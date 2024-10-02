function sayHello() {
  console.log("Hallo iedereen");
}
function sayHelloToPGMA() {
  console.log("Hallo 1PGMa");
}

sayHelloToPGMA();

function calculateSum(number1, number2) {
  console.log("De som is " + (number1 + number2));
}

function getSum(number1, number2) {
  return number1 + number2;
}

sayHello();
console.log("Hallo");
sayHello();
const sum = getSum(10, 8);
console.log("De som is " + sum);
console.log("De volgende som is " + getSum(20, 7));
