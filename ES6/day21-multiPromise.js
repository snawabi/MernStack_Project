// concurrent promise calls
// when we make multiple promise calls and we want to check what happened to all of them 
// and then decide whats going to be the next step

//user is authenticated and my product requires some details of user using userid created but authentication
//userid - from authentication (first)

//try making these calls parallely 
//getUserProducts(userid)
//getUserAccountDetails(userid)
//getUserCartHistory(userid)
//authentication.then("To get resolve callback data").catch("To get reject callback data")

let getUserProducts = new Promise((resolve, reject)=>{ //getUserProducts
  setTimeout(() => {
      resolve({
          "status" : "succesfull",
          "msg" : "user products are fetched",
          "promise date" : (new Date).toDateString()
      })
  }, 1000);
})

let getUserAccountDetails = new Promise((resolve, reject )=>{ //getUserAccountDetails
  
  setTimeout(() => {
      resolve({
          "status" : 200,
          "msg" : "user AccountDetails are fetched",
          "promise date" : (new Date).toDateString()
      })
  }, 2000);
})

let getusercart = new Promise((resolve, reject)=>{ //getusercart
  
  setTimeout(() => {
      resolve({
          "status" : 200,
          "msg" : "user cart is fetched",
          "promise date" : (new Date).toDateString()
      })
  }, 3000);

  setTimeout(() => {
      reject({
          "status" : 404,
          "msg" : "user cart is not fetched",
          "promise date" : (new Date).toDateString()
      })
  }, 2000);
})

console.log("Promises are working... ")

// when we need all the promises to be settled we use this
// the case when even one promise fails all the promises gets rejected

// Promise.all([
//     getUserProducts,
//     getUserAccountDetails,
//     getusercart
// ]).then((data)=>{console.log("promises ", data)})
// .catch((err)=>{console.log("errr ",err)})


//when we need to check by our self about the output of each promise in multiple promise
//then we use AllSettled to check output of each promise

Promise.allSettled([
  getUserProducts,
  getUserAccountDetails,
  getusercart
]).then((data)=>{console.log("promises ", data)})
.catch((err)=>{console.log("errr ",err)})


//create promise of three concurrent sessions of a day and try to resolve and reject them