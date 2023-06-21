//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

function startEnd(param1, param2){
  let array=[];
  let sum = 0;
  while (sum<=param2){
    sum = param1 + 1;
  }
  console.log(sum);
 
}

console.log(startEnd(10,15))