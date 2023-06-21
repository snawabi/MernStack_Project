//Functions : JS is functional programming language and its power lies in the spirits of functions or variations of functions

//As most of the essential features are built through functions so it is termed as - first class member citizens

//if nothing is returned from a function JS from its implementation will return default value, i.e- undefined
function name(params) {
  return params*params
}
console.log(name(5))

console.log(name()) //NaN - Not a number

//1. Named functions - a function definition with name is termed as named function
function PrintData(param) {
  return param*param
}

//2. IIFE - Immediately Invocable function expression
(function IIFE_Example(sessionName, sessionID) {
  console.log("IIFE session name - "+ sessionName +" "+ sessionID);
})("MERNSTack", 5)


//IIFE_Example("React") //IIFE

//3. Function expression

var funcExpression = function (params) {
      return params;
}

console.log(funcExpression("Simplified Function Expression!!!"))

//4. Constructor function We can create a function to be instantiated like a class 

function Area_const(length, breadth) {
  this.length = length,         // this.name,  adding property to the function
  this.breadth = breadth,
  this.rectangleArea = function () {
      return this.length*this.breadth
  }
}

var areaObj = new Area_const(9,8) //function as a class
console.log("Are of rectangle " +areaObj.rectangleArea())

//5. Nested Functions : when one function executed inside other function

function A(params) {
  var a = params
  console.log("a " +a)

  function B(params) {
    console.log(params)

      function C(params) 
      {
          var c= a
          console.log("c "+c)
      }   
  }  
}

console.log(A(4)) //a a
                 //undefined\p\learning-paths