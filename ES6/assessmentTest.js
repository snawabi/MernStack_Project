// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil
// e. 

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//a
let getHeroes = heroes.filter(evil=>evil.isEvil == true);
//console.log(getHeroes);

//b
let uniqueFamilyName = heroes.reduce((prevValue, currentValue)=>{
 let uniqueObj = prevValue.find((item)=>item.family === currentValue.family)

 if(uniqueObj){
  return prevValue
 }else {
  return prevValue.concat(currentValue)
 }
},[])

console.log(uniqueFamilyName)
//c
let heroName = heroes.map(name => name.name + " Sir")
console.log(heroName)

//d
let MarvelNotEvil = heroes.some(marvel=>
  (marvel.family == "Marvel" && marvel.isEvil == true)
)
console.log(MarvelNotEvil)

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let myMap = new Map();

let name = "james", nameFunc = function() {}, lastName= "Gomez";
myMap.set(name, "good guy");
myMap.set(nameFunc, "function");
console.log(myMap.get(name)); // good guy
console.log(myMap.size); //2
console.log(myMap.entries())

let setName = new Set(["gomez", "robert", "Jose", "James"]);
setName.add("rodguez");
console.log(setName.entries());
console.log(setName.size);
console.log(setName.has("James"));

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

let promiseObj = new Promise((resolve, reject)=>{
        //1 shortHand
        dog = "woof", cat="meow", fox="weee",
        animal = {dog, cat, fox},
        //2 for-of loop
        array = ["James", "gomez", "Ben"]
        arrayFunc = function(){
          for(key of array){
            console.log(key);
          }
      }
      setTimeout(()=> {
        resolve({
          //3 arrow function
          arrowFunc: ()=> 5 *2,
          //4 default parameter assignment
          defaultFunc:(a=0, b=0)=> a * b,

          functionCall: function(){
            console.log(animal)
            arrayFunc()
          },
          //5 this
          name: "james",
          age: 20,
          degree: "Master",
          getDetails: function(){
            return `${this.name} ${this.age} ${this.degree}`
          }

        })
      }, 2000)

      setTimeout(()=>{
        reject({
          feature: "failed"
        })
      },3000)
})

promiseObj.then((data)=>{console.log("data: ", data)})
          .catch((err)=>{console.log("error ", err)})

//4. Using the promise object at #3 create an async and await feature

async function promiseFunc(){
  await promiseObj.then((data)=>{console.log("data: ", data)})
                  .catch((err)=>{console.log("error ", err)})
  console.log("asyn and wait is compeleted")
}

promiseFunc();

// 5. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

function mult(...params){
  value = 0;

  value = params.reduce(function(prevValue, currentValue){
    if(typeof currentValue == "number"){
      return prevValue * currentValue
    }
    else {
      return (`${prevValue}  ${currentValue}`)
    }
 
  },1)

  return value;
}

let numberMult = [1,2,3];
console.log(mult(...numberMult));

let student = ["Tien", "Alex", "David"];
console.log(mult(...student));

//6. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

let {userDetails :{last, number=9119119110}} = person;
console.log(last, number)

//7. Give me an example of const data manipulation
const dataManipulation = {
  degree: "Bachelor of Science",
  university: "California"
}

dataManipulation.degree = "Associate Degree"
console.log(dataManipulation)

//8. What is the difference between for-of and for-in show with examples

// for-in is good for json object
let studentInfo = {name: "james", id: 234234, university: "California University"}
for(const key in studentInfo){
  let newKey = studentInfo[key]
  console.log(newKey)
}

// for-of is good for array of string or array of numbers
let studentArray = ["good student", "grade A+", "Topper"];
for(const key of studentArray){
  console.log(key)
}

//9. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

let signin = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      status: 200,
      statusCode: "sucess"
    })
  },2000)

  setTimeout(()=>{
    reject({
      status: 400,
      statusCode: "failed"
    })
  },3000)
})

let  userregistration = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      status: 200,
      statusCode: "sucess"
    })
  },2000)

  setTimeout(()=>{
    reject({
      status: 400,
      statusCode: "failed"
    })
  },3000)
})

let  nextpageToNavigate = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      status: 200,
      statusCode: "sucess"
    })
  },2000)

  setTimeout(()=>{
    reject({
      status: 400,
      statusCode: "failed"
    })
  },3000)
})

Promise.all([
  signin,
  userregistration,
  nextpageToNavigate
]).then((data)=>{console.log("data: ", data)})
  .catch((err)=>{console.log("error: ", err)})


//10. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios

let  studentSignIn = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      status: "Successfully sign in"
    })
  },2000)

  setTimeout(()=>{
    reject({
        status: "Could not sign in"
    })
  },3000)
})

let  checkOutBook = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      status: "Successfully checkout book"
    })
  },3000)

  setTimeout(()=>{
    reject({
        status: "Could not check out the book"
    })
  },2000)
})

Promise.allSettled([
  studentSignIn,
  checkOutBook
]).then((data)=>{console.log("data: ", data)})
  .catch((err)=>{console.log("error: ", err)})
