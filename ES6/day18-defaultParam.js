//default params are the params used to support unavailability of parameters passed in a function


function Sum(a = 0, b = 0) { //b= undefined, 2+undefined
    
  return a + b;

  // if (a && b) { //will check for undefined case for a and b both
  //     return a + b;    
  // }else{
  //     return 0;
  // }
  
}

console.log(Sum(2,6)); //8
console.log(Sum(2)); //NaN

console.log(Sum()); 