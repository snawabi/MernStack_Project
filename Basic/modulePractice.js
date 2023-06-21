var Student = {
  firsName: "James",
  lastName: "Robino",
  id: 12345,
  University: "Hampton University",
  getStudentDetails: function(){
    return this.firsName + " " +this.lastName + " "+this.id +" "+this.University
  }
}

var Account = {
  accountHolderName: "Ronaldo Ochoa",
  bankName: "Bank of America",
  accountNumber: 12234,
  getAccountDetails: function(){
    return this.accountHolderName +" "+this.bankName +" "+this.accountNumber
  }
}

module.exports = {Student, Account}