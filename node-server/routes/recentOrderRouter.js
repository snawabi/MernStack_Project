let express = require("express");
let router = express.Router({}),
RecentOrderDataModel = require("../data-model/recentOrderDataModel");

// recent order api
router.post("/api/saveRecentOrder", (req, res)=>{

  RecentOrderDataModel.findOne({userid: req.body.userid})
    .then((orderDb)=>{
      if(!orderDb){
        console.log("in file recentOrderRoute.js new order created ");
        let newRecentOrder = new RecentOrderDataModel(req.body);

        newRecentOrder.save()
        .then((data)=>{
          res.json(data);
        })
        .catch((error)=>{
          console.log("in file recentOrderRoute.js new order not created ", error);
          res.send(" send: in file recentOrderRoute.js new order not created ", error)
        })
      }
      else {
        console.log("replacing paid item", req.body.userid)
        orderDb.order = req.body.order; // array of order list
        orderDb.date = new Date();
        orderDb.save()
        .then((data)=>{
          console.log("in file recentOrderRoute.js order updated ", data);
          res.json(data);
        })
        .catch((error)=>{
          console.log("in file recentOrderRoute.js could not updata order ", error)
          res.send("send: in file recentOrderRoute.js could not updata order ", error)
        })
      }
    })
    .catch((error)=>{
      console.log("error in file recentOrderRoute.js posting data: ", error)
      res.send("send in file recentOrderRoute.js posting data: ", error)
    })
});


router.post("/api/getRecentOrder", (req, res)=>{
  RecentOrderDataModel.findOne({userid: req.body.userid})
  .then((order)=>{ 
    if(!order){
      console.log("in file recentOrderRouter.js no purchase order to fetch")
    }
    else {
      // console.log("in recentOrderRouter.js fetching order", order); 
    res.json(order)
    }
     })
  .catch((error)=>{ res.send("in file recentOrderRoute.js could not get recentOrder ", error)})
});

module.exports = router;