//importing file system module in our code so that we can use it for accessing file
let fsObj = require("fs"); //fs - module used to do job/s with file systems

console.log("file read starts");

//synchronos way -> will not execute the next line until its done. -> block the code writen below until done executing.
let fileData = fsObj.readFileSync("./multipromise.js", "utf-8")

// console.log("file data ", fileData)

// console.log("file read ends"); // excuted after top console.log

//------------------------------------------------------------------------------------------------

//asynchronus way - nonblocking way, uses callback

console.log("file read async starts"); // execute first

// fsObj.readFile("./async.js", "utf-8",(err, data)=>{ //node system error first callback
//     console.log("err", err);
//     console.log("data", data);  //excute thrid therefore not block any of the code.
// })


console.log("file read async ends"); // execute second
//------------------------------------------------------------------------------------------------

//event listener class - 

//stream creates a chunk of extra space or buffer space and their it does its operation and once compelete need to release it into garbage collection.
console.log("Read File using reader stream start");

//ReadFile using streams 
// let readerStream = fsObj.createReadStream("./class.js","utf8");
// let data = "";

// readerStream.on("data",(chunks)=>{
// //    console.log("chunks ", chunks)
//     data = data + chunks
// })

// readerStream.on("end",()=>{
//     console.log("end ", data);
// })

// readerStream.on("error",(erroObj)=>{
//     console.log("error ", erroObj)
// })

// console.log("Read File using reader stream end");

//------------------------------------------------------------------------------------------

//Writing into a file using write stream

let userDetails = {
    name : "Sohail",
    age : 20,
    city : "California",
    session : "MernStack"
}

let writerStream = fsObj.createWriteStream("./Text.json","utf8");

writerStream.write(JSON.stringify(userDetails));
writerStream.end();


writerStream.on("finish", ()=>{ //attached an event from eventemitter class
    console.log("Writing into the file is done")

    fsObj.readFile('./Text.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules

        console.log("err", err);
        console.log(JSON.parse(fileData));
    
    });
})

writerStream.on("error",(erroObj)=>{
    console.log(erroObj)
})
console.log("Read File Ends Using Writer Stream");



//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readtream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format


//REPL - read, evaluate, print and loop