// `` - use backtick to write any kind of string or html element and JS engine will take care of everything
// ${} - use ${} for further evaluation of variable values

let {animalSound, animalSound6} = require("./day17-shortHand");

console.log("Random string that i wanted to type here for template literals" +
" Random string that i wanted to type here for template literals " +
" Random string that i wanted to type here for template literals \n" +
" Random string that i wanted to type here for template literals " +
" Random string that i wanted to type here for template literals " +
JSON.stringify(animalSound))


console.log(`Random string that i wanted to type here for template literals 
Random string that i wanted to type here for template literals                                      Random string that i wanted to type here for template literals
Random string that i wanted to type here for template literals 
                                Random string that i wanted to type here for template literals 
                                <div><b>Some Values</b></div>
           ${JSON.stringify(animalSound6)}                     `)