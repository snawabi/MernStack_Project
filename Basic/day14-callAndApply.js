
firstName = "Sohail"

var student1 = {firstName : "Garrick", timing : "Morning", session: "CoreJavascript"}
var student2 = {firstName : "Tien", timing : "Morning", session: "Javascript"}

//this : keyword represents the context of execution of any function

function PrintUserInfo(userId, address) {
   // console.log(this) //is global when we do not attach any object for execution
    console.log(` Student Id  ${userId}  
                  Student Name  ${this.firstName} 
                  Session Name  ${this.session}
                  Student Address  ${address}`)
}

//UserObj.PrintUserInfo("25025")//class and object 
//PrintUserInfo("202301");

//PrintUserInfo.call(student1,202317041, "Somewhere on earth") //context (this) is now set to student1
//PrintUserInfo.call(student2,22023232, "Somewhere in US") //context (this) is now set to student2


var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}

GetVehicleInfo.call(BMW,"YES", 5, 5, 150, "IND")
GetVehicleInfo.apply(BMW,["YES", 5, 5, 150, "USA"])


//Print Account (Bank Account) information using call and apply and 
//try to see how we get these functions executed immediatly

//------------------------------------------------------------------------------


firstName = "Sohail"

var student1 = {firstName : "Garrick", timing : "Morning", session: "CoreJavascript"}
var student2 = {firstName : "Tien", timing : "Morning", session: "Javascript"}

//this : keyword represents the context of execution of any function

function PrintUserInfo(userId, address) {
    console.log(this) //is global when we do not attach any object for execution
    console.log(` Student Id  ${userId} 
                  Student Name  ${this.firstName} 
                  Session Name  ${this.session}
                  Student Address  ${address}`)
}

//UserObj.PrintUserInfo("25025")//class and object 
// PrintUserInfo("202301");

// PrintUserInfo.call(student1,202317041, "Somewhere on earth") //context (this) is now set to student1
// PrintUserInfo.call(student2,22023232, "Somewhere in US") //context (this) is now set to student1


var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}

// GetVehicleInfo.call(BMW,"YES", 5, 5, 150, "IND")

// GetVehicleInfo.apply(BMW,["YES", 5, 5, 150, "IND"])


//Print Account (Bank Account) information using call and apply and 
//try to see how we get these functions executed immediatly


console.log("SetTimeout Start")
// setTimeout(function (params) {
//     console.log("SetTimeout")
// }, 2000);

var userInfo = {
    UserName : "Alex",
    Session : "JS",
    GetUserInfo : function () {
        console.log(` 
            User Name ${this.UserName} 
            Session ${this.Session}`)

        var that = this; //resolving the context using copy of this

        setTimeout(function () {
            // console.log(this)
            
            // console.log(` 
            // User Name ${that.UserName} 
            // Session ${that.Session}`)

            console.log(` 
            User Name ${this.UserName} 
            Session ${this.Session}`)
        }.bind(this), 2000); //bind helps resolving the context in delay manner
    }
}

userInfo.GetUserInfo();