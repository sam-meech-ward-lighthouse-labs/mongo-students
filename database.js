const students = {};

function addStudent(student) {
  console.log(student);
  const id = Math.round(Math.random(36)*100000);
  student.id = id;
  student.alergies = student.alergies.split(',');
  students[id] = student;
}
exports.addStudent = addStudent;

function getStudents() {
  return students;
}
exports.students = getStudents; 