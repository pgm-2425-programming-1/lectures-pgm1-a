const students = [
  {
    firstName: "Michael",
    lastName: "Vanderpoorten",
    image: "images/michael.jpg",
    email: "michael.vanderpoorten@arteveldehs.be",
  },
  {
    firstName: "Evelien",
    lastName: "Rutsaert",
    image: "images/evelien.png",
    email: "evelien.rutsaert@arteveldehs.be",
  },
  {
    firstName: "Philippe",
    lastName: "De Pauw - Waterschoot",
    image: "images/philippe.png",
    email: "philippe.depauw@arteveldehs.be",
  },
];

const $students = document.getElementById("students");

function convertStudentToHTMLString(student) {
  return `
    <li>
      <h2>${student.firstName} ${student.lastName}</h2>
      <a href="mailto:${student.email}">${student.email}</a>
      <img src="${student.image}" alt="${student.firstName}" />
    </li>`;
}

let html = "";
for (const student of students) {
  html += convertStudentToHTMLString(student);
}

$students.innerHTML = html;
