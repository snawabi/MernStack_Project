const express = require("express");
const app = express(); //express application start
const cors = require("cors"); //importing for setting cross origin request headers to true

console.log(__dirname); // path till directory where the file is
console.log(__filename); // complete file path with name

//creating sub application - mounting, path mount
const admin = express(); //new admin application for admin requests
const adminRouter = require("./routes/adminRoute"); //importing the file adminRoute.js

const userApp = express();
const userRouter = require("./routes/userRouter");
const user2Router = require("./routes/user2Router");
// const productRouter = require("./routes/productRouter");

//product router
const prodApp = express();
const prodRouter = require("./routes/productRouter");

//cart router
const cartApp = express();
const cartRouter = require("./routes/cartRouter");

//cart router
const hobbyApp = express();
const hobbyRouter = require("./routes/hobbyRouter");

// recent order router
const recentOrderApp = express();
const recentOrderRouter = require("./routes/recentOrderRouter")

//cancel order router
const cancelOrderApp = express();
const cancelOrderRouter = require("./routes/cancelOrderRouter")

//review order router
const reviewApp = express();
const reviewRouter = require("./routes/reviewRouter")


//json middle-ware for setting request content type to json in body
//in order for the server to parse the req.body. express.json: to send json to server
app.use(express.json({ limit: "2mb", extended: false }));

//adding cors as middleware to top level of API so that cors is set to true on all endpoint
app.use(cors());

app.use("/user", userApp);
userApp.use("/", userRouter); //localhost:9000/user/api/signinupuser

app.use("/user2", userApp);
userApp.use("/", user2Router); //localhost:9000/user2/api/signUp

app.use("/product", prodApp);
prodApp.use("/", prodRouter); //localhost:9000/product/api/saveProduct

app.use("/cart", cartApp);
cartApp.use("/", cartRouter); //localhost:9000/cart/api/saveUserCart

app.use("/recentorder", recentOrderApp);
recentOrderApp.use("/", recentOrderRouter); //localhost:9000/recentorder/api/saveRecentOrder

app.use("/cancelorder", cancelOrderApp);
cancelOrderApp.use("/", cancelOrderRouter); //localhost:9000/cancelorder/api/saveCancelOrder

app.use("/review", reviewApp);
reviewApp.use("/", reviewRouter); //localhost:9000/review/api/savereviews

// app.use("/hobby", hobbyApp);
// hobbyApp.use("/", hobbyRouter); //localhost:9000/hobby/api/saveAPI

// app.use("/product", userApp);
// userApp.use("/", productRouter); //localhost:9000/product/api/productlist

//to serve static files from the server we can use static middleware to configure our express application
// if there is static in the url, then it will serve from the public. welcome.js src="/static/welcome.js" not src="/public/welcome.js"
app.use("/static", express.static("public"));

app.get("/user", (req, res) => {
  console.log(req.url);
  console.log(req.query);
  res.json({
    name: "Jason",
  });
});

//two ways to send the information in get method
//query string
app.get("/qstring", (req, res) => {
  //http://localhost:9000/qstring?name=Garrick&age=25
  let qs = req.query["name"]; //req.query is the way to read data passed in url
  console.log(qs);
  if (qs) {
    res.send(qs + "  " + req.query["age"]);
  } else {
    res.send("No query string present!!!");
  }
});

//route param
app.get("/rparam/:id", (req, res) => {
  //http://localhost:9000/rparam/25
  let routeParam = req.params["id"]; //req.params is the way to read data passed in url
  console.log(routeParam);
  if (routeParam) {
    res.send(`ID in route is ${routeParam} `);
  } else {
    res.send("No route param present!!!");
  }
});

//to match any method name - get, put, post, delete and patch
app.all("/info", (req, res) => {
  //console.log(req)
  //res.send(JSON.stringify(req.rawHeaders))
  res.sendFile(__dirname + "/public/index.html");
});

// app.get('/public/welcome.js', (req, res) => {
//     res.sendFile(__dirname+"/public/welcome.js")
// })

// app.post('/info', (req, res) => {
//     res.sendFile(__dirname+"/index.html")
// })

app.get("/html", (req, res) => {
  res.send("<h1>Application Running Through Nodemon</h1>");
});

//application mounting
app.use("/admins", admin); // if in the url localhost:9000/admins present serve the request from admin
admin.use("/", adminRouter); //if in the url localhost:9000/admins present serve the request from adminRouter which is in the file of adminRoute.js

app.use("/user", userApp);
userApp.use("/", userRouter); //localhost:9000/user/api/signinupuser

//localhost:9000/admins
// admin.get("/", (req, res) => {
//   res.send("Hello Admin System!!!!");
// });

//http://localhost:9000/
// app.get('/', function (req, res) {
//     res.send('Hello World from Express')
// })

// app.get('*', function (req, res) {
//     res.send('API you"re looking for is still in progress....')
// })

app.listen(9000); //localhost:9000

console.log("Express is listening at : localhost:9000");

//create an api with endpoint - getname and return your name and address

//Task
//create student static for static middle ware
//read student info using query string and route param
//create student router and app to serve request coming with studentinfo to serve
//practice the things covered in session
