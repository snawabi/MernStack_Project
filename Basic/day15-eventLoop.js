console.log("Starts");
setTimeout(function(){
    console.log("First - Call back")
    setTimeout(function(){
        console.log("Inner - Call back - 0 secs")
    }, 0);    
}, 1000);//1000
setTimeout(function(){
    console.log("Second - Call back")
}, 1000);//2000
setTimeout(function(){
    console.log("Third - Call back")
}, 1000); //At least should be waiting for 3 secs //3000
console.log("Execution Ends");