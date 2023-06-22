//use mongoose to make connection to mongodb
//get schema object created and also develop data model to be used in api
//set validations and data types in schema
//although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack15 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack15");

// schema is how data is orgaized within the mongoDB or ralational database.
let userSchema = new schemaObj(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    street: String,
    mobile: Number,
  },
  {
    versionKey: false, //false - set to false then it wont create in mongodb
  }
);

//model() is a wrapper of mongoose schema. its an interface for the database to create, query, update, delete records, and etc
let UserModel = mongooseObj.model("user", userSchema); //user - collection name, pluralised by mongodb "users"

module.exports = UserModel; //this should be used in userRouter.js to build user api's
//user api allows you to create, read, update, and delete users from your account.
