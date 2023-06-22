let express = require("express");
let router = express.Router({}),

ReviewDataModel = require("../data-model/reviewCustomerDataModel");

//Revew api to save customer's review in the db
router.post("/api/savereviews", (req, res)=>{
  console.log("in file reviewRouter req.body: ", req.body);

  let reviewDataModel = new ReviewDataModel(req.body);
  reviewDataModel.save()
    .then((newReview)=>{
      console.log("in file reviewRouter.js newReview: ", newReview);
      res.send(newReview);
    })
    .catch((error1)=>{
      console.log("in file reviewRouter.js error1", error1)
    })
})

//fetch all the customer review
router.post("/api/getreviews", (req, res)=>{
  ReviewDataModel.find({name: req.body.name})
    .then((allReviews)=>{
     // productName = allReviews.name;
      console.log("++++ in file reviewRouter.js getting product name: ", allReviews)
      res.send(allReviews)
    })
    .catch((error2)=>{
      console.log("in file reviewRouter.js error fetching reivews", error2)
    })
})

module.exports = router;