let express = require("express");
let router = express.Router({}),
CartDataModel = require("../data-model/cartDataModel");

// save cart api
router.post("/api/saveUserCart",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid})
        .then((cartDbObj) => {    
                //if there is no cart, make a call to save the cart    
                if (!cartDbObj) { //checks for null cart of given user
                        console.log("No cartitems Present, Adding / Inserting!" ); 
                        let cartObj = new CartDataModel(req.body);

                        cartObj.save().then((data)=>{                                  
                            res.json(data);
                        }).catch((err)=>{
                            res.send("Error Occurred"+ err);
                        });
                }
                else{ //update the cart for given user
                    console.log("CartItems Present, Replacing / Updating!", cartDbObj);
                        
                        cartDbObj.cart = req.body.cart;//replacing db cart with cart that user has sent from cartcomponent page
                        cartDbObj.clearCart = false;
                    
                        cartDbObj.save()
                        .then((data)=>{        
                            setTimeout(()=>{
                                res.json(data);
                                console.log("*** getting data: if cartClear=false",data)
                            },3000)                        
                        })
                        .catch((err)=>{
                            res.send("Error Occurred"+ err);
                        })
                }
        })
        .catch((err)=>{
                console.log("got an error!", err);            
                res.send("error while fetching cart!");
    });

});

// delete cart api
router.post("/api/deleteUserCart",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid})
        .then((cartDbObj) => {    
            cartDbObj.clearCart = true;
            cartDbObj.cart=[];
            cartDbObj.save()
            .then((data)=>{        
                setTimeout(()=>{
                    res.json(data);
                    console.log("*** cart is clear",data)
                },3000)                        
            })
            .catch((err)=>{
                res.send("Error Occurred"+ err);
            })
        })
        .catch((err)=>{
                console.log("got an error!", err);            
                res.send("error while fetching cart!");
    });

});

//fetch the cart api
router.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userid: req.body.userid})
        .then((cart) => { 
            if(!cart){
                console.log("in file carRouter.js car is empty");
            }
            else {
                res.json(cart)
            }     
        })
        .catch((err)=>{res.send("Error Occurred"+ err);})
});

module.exports = router;

//in future need to put this datamodel in user itself, so that we can have best use of mongodb