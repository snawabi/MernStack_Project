//variables - var, let, const -

//1. var is functional scope and let and const are lexical/block scoped -
//no hoisting for let and const

{
  var myVarName = "Var Name"
  let myLetName = "Let Name" //not accessible outside brackets
  const myConstName = "Const Name" //not accessible outside brackets
  //console.log(myLetName)
}

console.log(myVarName)
//console.log(myLetName)

//2. Redeclare and re-assignment

var myVarDeclr = "Var name declared"
var myVarDeclr = "Var name declared" //re-defined allowed

myVarDeclr = "new value" //re-assignment allowed

let myLetDeclr = "Let name declared"
//let myLetDeclr = "Let name declared" //re-declaration/ re-define not allowed

myLetDeclr = "Let new value" //re-assignment allowed


const myConstDeclr = "Const name declared"
//const myConstDeclr = "Const name declared" //re-declaration/ re-define not allowed

//myConstDeclr = "New const value" // reassignment is not allowed as it is a constant

//console.log(myLetDeclr)

//3. Define first and assign later 
var newVar;
let newLet;

newVar = "new value"
newLet = "new value"

console.log(newLet)

//constant needs to be declared as soon as defined
//const newConstVal; //not allowed
const newConstVal = 25;


//4. const are immutable 
const Student = {
  Name : "Tien",
  Session : "MERNStack"
}

console.log(Student)

// Student = {
//     Name : "Alex",
//     Session : "ES6"
// }

//catch - references can be updated

// Student.Name = "Garric"

console.log(Student.Name)


//5. var is functional scope and let is block scope example

for (var index = 0; index < 5; index++) {
  console.log(index)//0,1,2,3,4
  setTimeout(function () {
      console.log("Index Value - "+ index) //5 5 5 5 5
  }, 1000);
}

console.log(index); //5

for (var index = 0; index < 5; index++) {
  //console.log(index) // not work here
  (function IIFE(params){ //using iife
      setTimeout(function () {
          console.log("Index Value - "+ params) //0,1,2,3,4
      }, 1000);    
  })(index)
}


for (let indexLet = 0; indexLet < 5; indexLet++) {
  console.log(indexLet) //0,1,2,3,4
  setTimeout(function () {
      console.log("Index Value - "+ indexLet) //0,1,2,3,4
  }, 1000);    
}

//console.log(indexLet) // error here indexLet is not define here since its outside of the scope.