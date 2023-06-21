// any file or any block of code in js is termed as module
//let say this is user module

var User = {
  firstName: "Alex",
  lastName: "Kim",
  getUserDetails: function(){
    return this.firstName + " " + this.lastName;
  }
}

var Address = {
  homeAddress: "Earth",
  officeAddress: "office",
}

module.exports = {Address, User};