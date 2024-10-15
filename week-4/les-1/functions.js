// functie die code block uitvoert maar niets terug geeft
function saySomethingAboutTheNumber(number) {
  if (number >= 30) {
    console.log("Number is groter dan of gelijk aan 30");
  } else if (number === 20) {
    console.log("Number is exact 20");
  } else {
    console.log("Number is niet groter dan 30 of niet 20");
  }
}

saySomethingAboutTheNumber(10);
saySomethingAboutTheNumber(30);
saySomethingAboutTheNumber(20);
saySomethingAboutTheNumber(35);

function saySomethingAboutTheNumberReturn(number) {
  if (number >= 30) {
    return "Number is groter dan of gelijk aan 30";
  } else if (number === 20) {
    return "Number is exact 20";
  } else {
    return "Number is niet groter dan 30 of niet 20";
  }
}

console.log("Het resultaat is: " + saySomethingAboutTheNumberReturn(40));

function getSum(x, y) {
  return x + y;
}

console.log("De som is " + getSum(10, 30));
