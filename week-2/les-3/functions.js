function sayHello(name = "onbekende persoon", age) {
  if (age) {
    console.log("hello " + name + " die " + age + " jaar oud is");
  } else {
    console.log("hello " + name);
  }
}

sayHello("cedric", 24);
sayHello("hamer hamer");
sayHello();

function getTemplate(name, age) {
  return `
==============================
name   ${name}
age    ${age}
==============================
`;
}
console.log(getTemplate("Keano", 18));
console.log(getTemplate("Pieter", 19));

// originele manier om een functie aan te maken
function saySomething(something) {
  console.log(something);
}

// nieuwere manier om een functie aan te maken = arrow function
const saySomethingAlt = (something) => {
  console.log(something);
};

saySomething("Hallo iedereen");
saySomethingAlt("Hallo iedereen vanuit de arrow");
