//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//[{key : "value"}]
let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is string key value")
myMap.set(keyObj, "This is object type key value") //keys like non number or alphanumeric, is termed as weeak map
myMap.set(keyFunc, "This is function type key value")
myMap.set(keyNum, "This is number type key value")


console.log(myMap);
// console.log(myMap.get(keyString))
// console.log(myMap.get('a string'))

 console.log(myMap.get({}))
// //check the same for functions
//  console.log(myMap.get(keyObj))

// myMap.delete(keyString)

// console.log(myMap.size)
// console.log(myMap.entries())

// console.log(myMap.has({}))


//Set : it creates a list of unique values and would have similar operations like we do in map

let StudentSet = new Set(["Garrick","Sohail", "Alex", "Boubakar", "Tien", "David"])

// console.log(StudentSet.has("David"))

// console.log(StudentSet.add("Lemar"))
console.log(StudentSet.entries())

// console.log(StudentSet.add("David"))
// console.log(StudentSet.entries())

//create a new set and map and check 5 operations in each