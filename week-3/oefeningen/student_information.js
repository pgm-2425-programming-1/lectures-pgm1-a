const student = {
  name: "Vanderpoorten",
  firstName: "Michael",
  genderCode: 0,
  dateOfBirth: 705535200000,
  courses: [
    {
      name: "Data Management",
      lecturers: ["Adriaan Glibert"],
    },
    {
      name: "Web 1",
      lecturers: ["Evelien Rutsaert", "Sjouwke Van Parys"],
    },
    {
      name: "Programming 1",
      lecturers: ["Niels Minne", "Michael Vanderpoorten"],
    },
    {
      name: "IT Professional",
      lecturers: ["Claire Geeraerts", "Isabelle Volckaert"],
    },
  ],
};

function generateStringForLecturers(lecturers) {
  return lecturers.join(", ");
}

function generateStringForCourses(courses) {
  let text = "";
  for (const course of courses) {
    text += `
Course: ${course.name}
Lecturers: ${generateStringForLecturers(course.lecturers)}
------------------------------------------------
    `;
  }
  return text;
}

function generateStringForGender(gender) {
  if (gender === 0) {
    return "Male";
  } else if (gender === 1) {
    return "Female";
  } else {
    return "Onbekend";
  }
}

function generateStringForStudent(student) {
  return `
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.name}
Gender: "${generateStringForGender(student.genderCode)}"
Day of birth: ${new Date(student.dateOfBirth)}
======================================================
COURSES
======================================================
${generateStringForCourses(student.courses)}
======================================================`;
}

console.log(generateStringForStudent(student));
