const name = "Bruno";
const age = 19;
const hobbies = ["gamen", "fietsen"];

const student = {
  name: "Bruno", // property name met waarde Bruno (string)
  age: 19,
  hobbies: ["gamen", "fietsen"],
  address: {
    street: "Straat",
    number: "19",
    city: "Kalken",
    postalCode: "9270",
  },
};

console.log(student.name);

console.log(`
${student.name} is ${student.age} jaar oud en woont in ${student.address.city}
`);

// Bruno is jarig
student.age = 20;
student.lastName = "Willems";

console.log(`
${student.name} ${student.lastName} is ${student.age} jaar oud en woont in ${student.address.city}
`);
