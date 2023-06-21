// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : 
//Async : A way to have multi-threading in javascript like other object oriented programming language

// fetch user - call
// fetch product - call
// fetch stores - call

// main()
// - async1 -> thread -> main/stack
// - async2 -> thread2 -> main/stack
// - async3 -> thread3 -> main/stack

function resolveAfter2Seconds() {
  return new Promise((resolve,reject) => {
          setTimeout(() => {
              resolve({
                  "statuscode" : 200,
                  "statusmsg" :'resolved'
                  });
          }, 2000);
  });
}


console.log("async Execution starts");

//async function will execute itself in a separate thread
async function asyncCall() { 
  console.log("Before await");

  await resolveAfter2Seconds()
        .then((data)=>{ console.log("data ", data) })
        .catch((err)=>{ console.log("err ", err) })

  console.log("Async call happend in separate thread!!!")

  await resolveAfter2Seconds()
        .then((data)=>{ console.log("data ", data) })
        .catch((err)=>{ console.log("err ", err) })

  console.log("Async call 2 happend in separate thread!!!")

}

console.log("Before we initiate async call!!");

asyncCall()

console.log("After we the async call is done!!");


//create an example of async and await using vaccine fearture, in resolved case show vaccine is available,
//in rejected case show vaccine is not available