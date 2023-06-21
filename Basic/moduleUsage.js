//we'll import data from module file

var { User, Address } = require("./module");

console.log(User.getUserDetails());

User.firstName = "Sohail";

console.log(User.getUserDetails());

console.log(Address.homeAddress);

Address.getCompleteAdd = function () {
  return this.homeAddress + " " + this.officeAddress;
};

console.log(Address.getCompleteAdd());
