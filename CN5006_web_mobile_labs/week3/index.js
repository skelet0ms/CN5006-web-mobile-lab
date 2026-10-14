function EmployeeInfo(name, salary)
{
    console.log("Welcome " + name + "! Your monthly salary is " + salary);
}

// Gets the current date and time
const currentDateTime = new Date();

console.log("This is my first program.");
// Displays the current date and time
console.log("This programme was run on " + currentDateTime.toLocaleString());

var empName = "Tom"
var empSalary = "5000"

// Calling the function
EmployeeInfo(empName, empSalary);

/*
SECOND EXERCISE
*/
const EmpSkills = (skills, name, labGrp)=>
{
    console.log("Student name " + name + " Expert in " + skills)
    console.log("Lab Group Name ", labGrp)  
}

EmpSkills("java", "2715772", "4")

/*
THIRD EXERCISE
*/
const student = require("./studentInfo.js")
const Person = require("./person.js")

//display info for the student
console.log("Student Name: " + student.getName())
console.log(student.location())
console.log(student.dob) 
//display info for the student's grade
console.log(student.StudentGrade)
console.log("grade is " + student.StudentGrade(55))
// making a person and displaying the info
const person1 = new Person("Dave", "UK", "email@example.com")
console.log("using Person module ", person1.getPersonInfo())
console.log("Program finished")