//dataType: are used to identify one set of data uniquely

//other language: int, double, big-int, char, string, object...

//JavaScript: number, string, object, null, undefine, boolean
var myValue = 99;
console.log(typeof myValue); //number

myValue=99.99;
console.log(typeof myValue); //number

myValue="99.99";
console.log(typeof myValue); //string (autocasting)

myValue = {name: "Alex", friendName: "Davide"}
console.log(myValue);
console.log(typeof myValue); //object

myValue = null
console.log(myValue);
console.log(typeof myValue); //object -> its aware the type is empty

myValue = undefined
console.log(myValue);
console.log(typeof myValue); //undefine -> is default value of var. compiler does not know the value

myValue = true
console.log(myValue);
console.log(typeof myValue);//boolean

// ES6 updated version has symbol type to declare of own choice

var mySymbol = Symbol("Will use in my own library");
console.log(mySymbol);
console.log(typeof mySymbol); // type is symbol
