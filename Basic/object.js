//objects are reference type and is the top level of heirarchy in javascript
//Object class is used like a class to get features like : inheritance and polymorphims

var Employee = {
  EmpName : "David",
  EmpID : 1,
  getEmployeeDetail : function () {
      return this.EmpName +" "+ this.EmpID //+" "+this.Specialist
  }
}

//console.log(Employee.getEmployeeDetail())

//1. one way to create object in js is by using new keyword
//i am copying the Employee references to SE
// var SoftwareEngg = new Object(Employee); // inherits parent

// SoftwareEngg.Specialist = "MERNStack"

// console.log(Employee.getEmployeeDetail())     //David 1 MERNStack
// console.log(SoftwareEngg.getEmployeeDetail()) //David 1 MERNStack

//2.  by using create method of object we can create clone of parent
var SoftwareEngg = Object.create(Employee); // clones parent

SoftwareEngg.EmpName = "Tien"

SoftwareEngg.Specialist = "MERNStack"

//over-riding happens here
SoftwareEngg.getEmployeeDetail = function () {
  return this.EmpName +" "+ this.EmpID +" " + this.Specialist
}

console.log(Employee.getEmployeeDetail())     //David 1
console.log(SoftwareEngg.getEmployeeDetail()) //Tien 1 MERNStack

//3.  Merging objects

var obj1 = {name : "Tien", age : 29, salary : 250}
var obj2 = {name : "Garrick", address:"New City ", skills : "Javascript"}
var obj3 = {name : "David", session:"MERNStack"}

//var obj4 = {obj1, obj2, obj3}

var obj4 = Object.assign(obj1, obj2, obj3) // (target, source) target replaced by source
console.log(obj4)

//4. Even the empty object will have prototype

var emptyObj = {} //Object.create({})
console.log(emptyObj.__proto__)


//5. if we wish to break the prototype chain
//you need to pass null in your object create constructor

var nullProtoype =  Object.create(null);

console.log(nullProtoype.__proto__) //undefined
