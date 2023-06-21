// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chrip",
lion = "roar";

let animalSound = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

let animalSound6 = { cat, dog, bird, lion } //[object object]

console.log("Animal Sounds are represented as - ", animalSound); // { cat: 'Miaow', dog: 'Woof', bird: 'Chrip', lion: 'roar' }
console.log("Animal Sounds are represented as - " + animalSound6); //animalSound6.toString() [object object]

console.log("Animal Sounds are represented as - Legacy Way " + JSON.stringify(animalSound6)); //{"cat":"Miaow","dog":"Woof","bird":"Chrip","lion":"roar"}


module.exports = {animalSound, animalSound6};

let product = {name: "olajsd"}

let products = {name: "olajsdss"}

