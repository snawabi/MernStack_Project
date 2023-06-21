//Arrow Function : or also known as fat arrow function are presented like a lambda expression and serve below objectives

//1. Ease of writing

function Area(a, b) {
  return a*b
}

let AreaArrow = (a,b)=>a*b

// console.log(AreaArrow(5,6))
// console.log(Area(5,6))

let ArrowCalculateValidAge = (age = 0)=>
{
  if (age >= 18) {
      return "Valid Voter Age"
  } else {
      return "Not a valid Voter"
  }
}

// console.log(ArrowCalculateValidAge(25))
// console.log(ArrowCalculateValidAge(15))
// console.log(ArrowCalculateValidAge())


//2. Resolving the context by copying context of parent function and doing somewhat similar job of bind

let User = {
  Name : "Tien",
  Age : 22,
  Address : "Somewhere in US",
  //getUserDetails : () => { //copies the global context 
  getUserDetails : function() { //copies the global context 
      console.log(` ${this.Name}`)
      console.log(` ${this.Age}`)
      console.log(` ${this.Address}`)

      // let that = this; //copying the context of immediate parent function
      // setTimeout(function(){
      //     console.log(` ${that.Name}`)
      //     console.log(` ${this.Age}`)
      //     console.log(` ${this.Address}`)
      // },2000)

      setTimeout(() => {
          console.log(` ${this.Name}`)
          console.log(` ${this.Age}`)
          console.log(` ${this.Address}`)
      },2000)
  }
}

User.getUserDetails()


//create a account class and a method with name getAccountDetails using arrow function