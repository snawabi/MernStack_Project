let express = require("express");
let router = express.Router({}),
CancelOrderDataModel = require("../data-model/cancelOrderDataModel");


CancelOrderDataModel = require("../data-model/cancelOrderDataModel");

router.post("/api/saveCancelOrder", (req, res)=>{
  CancelOrderDataModel.findOne({userid: req.body.userid})
    .then((cancelorderDb)=>{
      if (!cancelorderDb){
        console.log("in file cancelOrderRouter.js new cancel order created", req.body);
        let newCancelOrder = new CancelOrderDataModel(req.body);
        
        newCancelOrder.save()
        .then((newData)=>{
          console.log("in file cancelOrderRouter.js getting data: ", newData)
          res.json(newData)
        })
        .catch((error1)=>{
          console.log("in file cancelOrderRouter.js new cancel order not created", error1)
          res.send("in file cancelOrderRouter.js new cancel order not created ", error1)
        })
      }
      else {
        console.log("replacing the old cancel order with the new", req.body);
        cancelorderDb.cancelOrder = req.body.order;
        //cancelorderDb.date = req.body.date;
        cancelorderDb.save()
        .then((replaceDate)=>{
          console.log("in file  cancelOrderRouter.js canel order updated ", replaceDate);
          res.json(replaceDate)
        })
        .catch((error2)=>{
          console.log("in file  cancelOrderRouter.js could not update cancel order", error2)
          res.send("in file  cancelOrderRouter.js could not update canel order ", error2)
        })

      }
    }).catch((error3)=>{
      console.log("error in file  cancelOrderRouter.js posting data", error3);
      res.send("error in file  cancelOrderRouter.js posting data", error3);
    })
});

router.post("/api/getCancelOrder", (req, res)=>{
  CancelOrderDataModel.findOne({userid: req.body.userid})
    .then((cancelOrder)=>{
      if (!cancelOrder){
        console.log("in file cancelOrderRouter.js nothing to fetch")
      }
      else {
        console.log("in file cancelRouter.js fetching cancel order ", cancelOrder.cancelOrder);
        res.json(cancelOrder)
      }
      
    })
    .catch((error4)=>{
      console.log("in file cancelOrderRouter.js could not fetch cancel order ", error4)
      res.send("in file cancelOrderRouter.js could not fetch cancel order ", error4)
    })
})

module.exports = router;