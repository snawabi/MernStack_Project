//rest - is having modules to handle all the requirements as below 
//module to handle http request (http)
//capable of handling http methods - get, put, post, delete, patch (header)
//creating sessions, local storage, cookies, cache (cookie)
//upload download operations, (multi-part)
//should handle the inputs (request data)- json, html, jpeg, xlsx, etc (body parser)

let http = require("http")

let bodyParser = require("body") //not part of node framework but we can get it explicitey from

//npm - package manager repository
//yarn - also a package mgmt tool

//we need to initialize the directory with npm tool

//npm init - initialize the repo in local

//package.json => contains information about the packages needed in the given application
//also contains the information about project like - name, version, dependencies, test, start point of appln


//web-server - to be able to create services/endpoints

//express - a npmjs package which does all the job of a web server

//install/uninstall express as dependency in server

// npm i <module name> or npm install <module name>
// npm u <module name> or npm uninstall <module name>

//*  if we dont put module name after npm i, it will by default 
// install/uninstall all the dependencies mentioned in package.json

//npm start -> runs the package.json inside script start: "node server" file that holds the code.

//npm run <custom comand name>

//node monitoring module - nodemon

//devdependencies -> inside package.json when "-D"
//installing module to be used only in development environment and should not got to production

//npm i <nodemon> -D