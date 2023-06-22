let express = require("express");
let router = express.Router({}),
ProductDataModel = require("../data-model/productDataModel");

//product api's : to save product
router.post('/api/saveproduct',(req, res)=>{
    console.log("product data ", req.body);

    let productDataObject = new ProductDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    productDataObject.save()
        .then((newProductData)=>{       
                res.send(newProductData); //if product successfully saved we will get the mongodb unique _id
        })
        .catch((err)=>{
                console.log("err ", err)
                res.send("Error in product saving");
        })
    })

//fetch the product
router.get('/api/getproducts',(req, res)=>{
    //fetch all the products saved in product collection in mongoDB
    ProductDataModel.find()
    .then((products)=>{ 
        res.send(products);
        })
    .catch((err)=>{
        console.log(err)
        res.send("Error in getting products");
    })
})


module.exports = router;