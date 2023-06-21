//callback function: function is a function passed as parameter. passed into another functon

function ArithmaticOperation(oprn, val1, val2) {
  if(oprn == "Add"){
      return val1 + val2
  }else{
      return val1 * val2
  }
}

function DoAddition(callback, param1, param2) {
  console.log(callback("Add", param1, param2))
}


function Multiply(func, param1, param2) {
  console.log(func("Multiply", param1, param2))
}

DoAddition(ArithmaticOperation, 5, 3)
Multiply(ArithmaticOperation, 5, 9)

setTimeout(function() {
  DoAddition(ArithmaticOperation, 9, 3)
}, 1000)


//write a callback function to print details of the user, calling function should be GetUserInfo

// below code is nested function
var e = 15; //global scope 
function sum1(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}
var outPut = sum1(5)(4)(3)(2)
console.log(outPut)

var sm2 = sum1(5)
var sm3 = sm2(4)
var sm4 = sm3(3)
var smOutput = sm4(2)
console.log(smOutput)