//literals: any identifier holding some value

var literals = required("./literals"); //if this type in other js file, it will print "This is global value for me"

// can be used in this file or other file by require("./literals")
globalThis.myGlobalValue = "This is global value for me";

var myName = "James"; // String literal

var fName = "Fist Name";
var lName = "Last Name"; 

var fName1 = "Fist Name";
var lName1 = "Last Name"; 

var fName2 = "Fist Name";
var lName2 = "Last Name";  // a lot of memory getting wasted here

var User = {
  firstName: "First Name",
  lastName: "Last Name"
}

var User2 = {
  firstName: "First Name",
  lastName: "Last Name"
}

User.firstName = "updated Name";

console.log(globalThis.myGlobalValue);