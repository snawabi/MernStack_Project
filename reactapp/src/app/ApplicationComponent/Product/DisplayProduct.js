import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../State/ProductState/ProductActions";
import DisplayDetailedProduct from "./DisplayDetailedProduct";


let DisplayProduct = ()=>{
    
    let productList = useSelector((state)=>state.productReducer.products);
    let dispatchToFetch = useDispatch();

    //useEffect is used as componentDidMount hook
    //binding: after render, everything is initialize and ready to access call the fetchProducts in productAction.js to get all of the product list that is saved in mongoDB to be also available in store or productReducer.js. That way the producList can show all the value.
    //without empty array, it's in infinite loop
    //[] saying the produclist will be static and useEffect will only run when it sees a change.Therefore when program starts runs only once
    useEffect(()=>{ dispatchToFetch(fetchProducts()) },[]) 
   // console.log("productList ", productList) // shows all the product that is saved

    return(
        <>
           <h2>Below are products we can add to cart!!</h2>
            <div>

                {productList && productList.length>0 ?
                    productList.map(product=>{
                       // return JSON.stringify(product)
                    //    return (
                    //     <ul>
                    //     <li>Name: {product.name}</li>
                    //     <li>{product.price}</li>
                    //     <li>{product.desc}</li>
                    //     <li>{product.rating}</li> 
                    //     <hr/>
                    //     </ul>
                    //    )
                       // or display in separate component by passing product
                         return <DisplayDetailedProduct product={product} key={product._id}/>
                    }):
                    "No Product Found!!"
                }
            </div>
        </>
    )
}

export default DisplayProduct;