let number =12;

number ="string";
console.log("outside " +number);

// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     process.exit();
// })
// process.stdin.on('exit', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

function pract(){
    let number = "function"
    console.log("insided funct " +number);
}


pract();

console.log("ourside func " +number);
