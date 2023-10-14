const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
if (students.length === 0) 
  return 0;
}
const totalScore = students.reduce((accumulator, student) => accumulator + student.score, 0);
const averageScore = totalScore / students.length;

  return averageScore;

const result = getAverageStudentScore(students); // Output: 87.5
console.log(result);