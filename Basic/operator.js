//operators: arithmeatic operatros
//>, <, >=, =<, ==, ===, &&, ||, ! ....

var someValue = 55; // assignment
someValue == 55; // comparison -> compares only the value not data type
someValue === 55; //comparison -> compares the value and data type

var validAge = 18;
var validProof = "Valid";

if (validProof == "Valid" && validAge == 18){
  console.log("valid vogter can vote")
} else {
  console.log("invalid voter can't vote")
}

//terinary operator

validProof == "Valid" && validAge == 18 ? console.log("valid vogter can vote") : console.log("invalid voter can't vote");