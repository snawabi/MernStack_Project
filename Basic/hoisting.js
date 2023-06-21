//hoisting: hoisting allows you to use functions and variables before they're declared. 

//1. creates the snapshot on top of the file and function
//2. variables - undefined
//3. function - function definition


console.log(someValue); // undefined -> only works for var variable
var someValue ="hoisting variable"

print(); // executes and print message. before declared
function print(){
  console.log("checking hoisting");
}

//Function expressions in JavaScript are not hoisted.This is because they are being used as a value, as opposed to function declarations
// functionExpression();  
// var functionExpression = function(){
//   console.log("Hoisng")
// }

// function expression/declartion
add(3,5); //8 function declartion is called
add(3,5,1); //8
add(3,5,1,4); //8

var add = function(a,b,c){
  console.log(a+b+c);
}
function add(a,b){
  console.log(a+b);
}
add(3,5); // Nan
add(3,5,1); //9  function expression has higher precedence
add(3,5,1,4); //9

