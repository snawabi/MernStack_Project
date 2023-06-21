var Student = {
  fullName : "james Gomes",
  stdId : 1234,
  getStudentDetail : function () {
      return this.fullName +" "+ this.stdId //+" "+this.Specialist
  }
}

var childStudent = Object.create(Student);

childStudent.fullName ="Ronaldo Ochoa";
childStudent.stdId = 4321;

console.log(Student.getStudentDetail());
console.log(childStudent.getStudentDetail());
