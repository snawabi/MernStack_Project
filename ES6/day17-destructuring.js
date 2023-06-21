// Destructure helps us to reduce the number of variables initialized 

//a. Array Destructures
//let name = "Some Name", age = 22, session = 1;
//get data from api - 
//let num1 = numberList[0]
//let num2 = numberList[1]

//1. copying variables from array
//let [one, two, three] = [1,2,3] //array gets copied in the variables on left

// console.log(one);
// console.log(two);
// console.log(three);

//2. having default assingments

// let [one, two, three = 33] = [1,2] 

// console.log(one);
// console.log(two);
// console.log(three);

//3. assiging rest of the values , rest will always be the last parameter

// let [one, two, ...restOfValues] = [1,2,3,4,5,6,7,8] 

// console.log(one);
// console.log(two);
// console.log(restOfValues);

//4. swapping of variables

let a = 9, b = 10;

[a, b] = [b, a]

console.log(a, b)


//b.  Destructuring of objects
//1.  in single object

let user = {
    name : "My Good Name",
    age : 25,
    session : "MERNStack"
}

//let usr_name = user.name;
//with object destructuring

let { name } = user;
console.log(name)

//2. destructuring in nested object

let student = {
    studentname : "Garrick",
    session : "Secondary",
    marks : {
        math : 89,
        english : 95,
        physics : 99
    }
}

let {studentname, marks:{ math, physics, chemistry=92} } = student;

console.log(studentname);
console.log(math);
console.log(physics);
console.log(chemistry);



//question :

let StudentTest = {
    firstname : "Sohail",
    address : "Planet Earth",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

let {lastname="Nawabi",sessionTopics:{covered1, covered2, covered3="ES6"} } = StudentTest

console.log(lastname)
console.log(covered3)