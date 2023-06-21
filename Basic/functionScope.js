// var Literalss = require("./Literals");

// console.log(globalThis.globalExp)
// console.log(globalThis.myGlobal)

//global scope
//local scope


var random = 25426;
console.log(private); //undefined
var private = 100;

function Print(myVal) {
    console.log(private); //undefined

    var private = 101; //this is local to Print can't be accessed outside
    console.log(random); //25426 -> bcuz inside the function not defined, if initialized below console.log then would be undefined

    (function () {
      console.log(private) //101 
    })()
}

//console.log(private);

Print(2500);