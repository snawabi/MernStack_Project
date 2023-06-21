// callBack and callback hell - too much of call backs if one call back fails then other enter a infinite loop
//we use various callback functions to properly signin and signup the user using nested callbacks

function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {

  let ValidUser =  AuthenticationCallback(userid, password, AuthorizationCallback); //making a server call - ajax (in async)
      if (ValidUser) {
          let userRole = AuthorizationCallback(ValidUser, NavigationCallback); //making a server call - ajax (in async)            
          //userRole.whatisTheOutput //success or failed -- promise
          if (userRole) { 
              let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
          } else {
              //check again for the user validity
              SigninSignUp(...callbacks);
          }
      } else {
          //send him on forgot password 
      }
}


// function SignInSignUpUser(Authentication, Authorization, NavigationPage){}

// function Authentication(params) {} //takes useerid and pwd and creates and signin user
// function Authorization(params) {} //take the userid generated and create user session with role
// function NavigationPage(params) {} //on the basis of user role it navigates the user to a predefined page



//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)


//two methods are provided by promise object to get the details of function execution
//then - when we read the data upon resolve
//catch - when we read the data upon reject

let promiseObj = new Promise((resolve, reject)=>{
                  setTimeout(() => {
                      //function Authentication(params) {}
                      resolve({
                          data : "authentication is successful",
                          status : "Success",
                          nextCall : "Authorization"
                      })                        
                  }, 4000);
                  
                  setTimeout(() => {
                      //function Authentication(params) {}
                      reject({
                          data : "authentication failed",
                          status : "Error",
                          nextCall : "Forgot Password"
                      })                        
                  }, 3000);
})

console.log(promiseObj)


promiseObj.then((data)=>{ 
      console.log("Upon getting resolved ", data)
}).catch((err)=>{ 
  console.log("Upon getting rejected ", err)
})

// setTimeout(() => {
//     console.log(promiseObj)
// }, 3000);



// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing