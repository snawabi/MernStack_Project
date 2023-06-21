// A generator function is a function that can be yeilded as many times as possible upon single invocation

//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

// function MyFunc(params) { console.log(params) }
// MyFunc("Jason")
// MyFunc("Rio")
// MyFunc("Paribesh")
// MyFunc("Mehejabeen")

//yield


function *PrintData(num) {

  //do any async operation to read the value
  let updatedValue = 300;//fetch from server

  //here we can call other days stats
  yield num+updatedValue;

  yield num-updatedValue;
  
  yield num*updatedValue;
  
  yield num/updatedValue;

  return "something retuned" //returned true

  yield "Last Yield"; // after return the value is undefined
}

let generatorPointer = PrintData(10);

console.log(generatorPointer.next());
console.log(generatorPointer.next());
console.log(generatorPointer.next());
console.log(generatorPointer.next());

console.log(generatorPointer.next());//once return is done no further yield is possible

console.log(generatorPointer.next());



//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){
  
  yield console.log("Addition : " + (num1+num2));
  yield console.log("Subtraction : " + (num1-num2));
  yield console.log("Multiply : " + (num1*num2));
  yield console.log("Division : " + (num1/num2));
  
  return "Done";
}
let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())