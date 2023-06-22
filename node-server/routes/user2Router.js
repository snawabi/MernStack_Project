const express = require("express");
const user2Routes = express.Router({});

const user2DataModel = require("../data-model/productDataModel");

user2Routes.post("/api/signUp", (request, response) => {
  console.log("user2", request.body);
  let checkEmail = request.body.email;
  let user2SignUp = request.body;

  user2DataModel
    .findOne({ email: checkEmail })
    .then((user2Exists) => {
      if (user2Exists) {
        console.log("user2 already exits ", user2Exists);
        response.send(user2Exists);
      } else {
        let newUser2 = new user2DataModel(user2SignUp);
        newUser2
          .save()
          .then((newUser2) => {
            console.log("new user2 has been added to the data ", newUser2);
            response.send(newUser2);
          })
          .catch((error1) => {
            console.log("new user2 could not be created ", error1);
            response.send("resp new use2 not be created ");
          });
      }
    })
    .catch((error) => {
      console.log("user2 could not be created ", error);
      response.send("resp. user2 could be not be created ");
    });
});

user2Routes.get("/api/getUser2", (request, response) => {
  user2DataModel
    .find()
    .then((allUser2Data) => {
      response.send(allUser2Data);
    })
    .catch((error) => {
      console.log(
        "in file user2Router.js error could not fetch all user2 data ",
        error
      );
      response.send("in file user2Router.js could not fetch all user2 data");
    });
});

module.exports = user2Routes;
