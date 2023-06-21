//spread operator - is used to spread the values present in an array or in any object

let numberArr = [2,3,4,5,6,7,8]

// console.log(numberArr[0])
// console.log(numberArr[1])

// console.log(...numberArr) //spreads the values after extraction from object

let product = {name : "IPhone", company : "Apple INC."}
let productPrice = {name : "IPhone 12", price : "$1000"}
let address = {name : "IPhone Mobile", deliveryAddress : "Somewhere in NY"}

let summary = {product, productPrice, address} //this is not a good way of merging

address.newProperty = "This should not be shown in summary"

//console.log(summary);

let summary2 = {};
Object.assign(summary2, product, address, productPrice);
address.newPropertyAssign = "This should not be shown in summary - assign"
console.log(summary2);

// let summarySpread = {...product, ...productPrice, ...address}
// address.newPropertySpread = "This should not be shown in summary - spread"
// console.log(summarySpread);

//spread preservers the immutability so that upon changing the object property value it doesn't show up in created one

//Rest Parameter reverse of spread is rest parameter

//let numberArr = [2,3,4,5,6,7,8]

function Sum(a,b,c,d,e,f,g,) {
    return a+b+c+d+e+f+g
}

//console.log(Sum(numberArr[0],numberArr[1]....))
console.log(Sum(...numberArr))


function LargeSum(...params) { //...params - rest parameter indicating rest of the parameters in a function
    let sum = 0;
                                //0//2//5       //2//3//4
    sum = params.reduce(function (prevValue, currentValue, currentIndex, arr) {
        
        console.log(prevValue)
        console.log(currentValue)
        console.log(currentIndex)
        console.log(arr)

        return prevValue + currentValue; //0+2 = 2 // 2+3=5 //

    },0)//0 - is initial prevValue

    return sum;
}
let arrN = [2,3,4]
console.log(LargeSum(...arrN)) //2,3,4

//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers