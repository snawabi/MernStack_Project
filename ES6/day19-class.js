//Class : in ES6 is a special type of function uses class keyword and mostly implemented as constructor function
//can be used like classes in JAVA


class CalculateArea {

  constructor(length, breadth, radius){
      this.length = length,
      this.breadth = breadth,
      this.radius = radius
  }

  Rectangle = function () {
      return this.length*this.breadth
  }

  Circle = function () {
      return 3.141*this.radius*this.radius
  }
}

let calcAreaObj = new CalculateArea(5,10,11);

console.log(calcAreaObj.Circle());
console.log(calcAreaObj.Rectangle());


//create a Vaccination class and put methods to book a slot, get price by passing vaccine name, initialize the value in constructor
