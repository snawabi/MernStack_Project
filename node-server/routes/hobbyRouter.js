// // import HobbyDataModel from "../data-model/hobbyDataModel";

// let express = require("express");
// let HobbyRouter = express.Router({});

// HobbyRouter.post("/api/saveAPI", (req, res)=> {

//   let newHobby = req.body;

//   HobbyDataModel.findOne({hobby: req.body.hobby})
//     .then((hobbyExist)=>{
//       if(hobbyExist){
//         console.log("the hobby alread in db ", hobbyExist)
//         res.send(hobbyExist)
//       }
//       else {
//         let createHobby = new HobbyDataModel(newHobby);

//         createHobby.save().then((hobbyCreated)=>{
//           console.log("new hobby created in db")
//           res.send(hobbyCreated)
//         }).catch((err)=>{
//           console.log("error creating the new hobby ", err);
//           res.send("error could not create the new hobby in db ", err);
//         })
//       }

//     }).catch((err)=>{
//       console.log("something went wrong in file hobbyRouter.js ", err)
//       res.send("something wrong in file hobbyRouter.js ", err);
//     })
// })

// module.exports = HobbyRouter;