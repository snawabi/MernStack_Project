import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../State/CartState/CartActions";
import { fetchReviews } from "../../State/ReviewState/ReviewAction";
import { useNavigate } from "react-router-dom";


let DisplayDetailedProduct = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAddProduct = useDispatch();
    let dispatchFetchReview = useDispatch();

    let name= product.name
      

    let addProductToCart = ( product )=>{
        console.log("file: DisplayDetailProduct.js addProductToCart(product) ", product)
        dispatchToAddProduct(addItemToCart(product))
    }

    let navigate = useNavigate();

    let findRelatedProduct=(productName)=> {
        dispatchFetchReview(fetchReviews(productName));
        navigate("/customerreview");
    }

    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            Name: {product.name}
                {showHide ? 
                    <ul>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.desc}</li>
                    <li>Rating: {product.rating}</li> 
                    <li>Quantity: {product.qty}</li> 
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                    <button onClick={()=>{findRelatedProduct(name)}}>Customer Rating</button>
                </ul>
                : 
                " "}
            </li>
        </ul>
    )

}

export default DisplayDetailedProduct;