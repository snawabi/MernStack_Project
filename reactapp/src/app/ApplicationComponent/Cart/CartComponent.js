import React, { Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent from "./CartSummaryComponent";
import { saveCartToDb } from "../../State/CartState/CartActions";
import {saveRecentOrderToDb} from "../../State/RecentOrderState/RecentOrderAction"
import { deleteCartDb } from "../../State/CartState/CartActions";

import { emptyTheCart } from "../../State/CartState/CartActions";


let CartComponent = (props)=> {
    //cartList = [{name:" ", price: " ", desc: " ", rating: " "}, {...}]
    let cartList = useSelector((state)=>state.cartReducer)
    var clearCart = true;

    //check if user is login or not by using the user._id
    let user = useSelector((state)=>state.userReducer.User)
    let dispatchToCart = useDispatch();

    let navigate = useNavigate();
    // let func = function(event) {    
    //    // dispatchToCart(emptyTheCart())  
    //     navigate('/checkout');
    //     event.preventDefault();
    // }

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let clearCartDb = (cartList, userid, clearCart)=>{
        if(!userid){
            alert("Please sign in  before saving the cart!!")
            navigate('/user');
        }else
          dispatchCartToDB(deleteCartDb(cartList, userid, clearCart));
          navigate('/checkout');
    }

    let func = function(event) {      
        navigate('/checkout');
        event.preventDefault();
    }

    let dispatchCartToDB = useDispatch();
    // let dispatchRecentOrderToDb = useDispatch();

    let clickToSaveCart = (cartList, userid)=>{
        if(!userid){
            alert("Please sign in  before saving the cart!!")
            navigate('/user');
        }else{
            //saving the cartList and userid in the database
            dispatchCartToDB(saveCartToDb(cartList, userid));
            // dispatchRecentOrderToDb(saveRecentOrderToDb(cartList, userid));
        }
    }

    return(
        <Fragment>
            {props.readOnly ?"" : <h1>Cart Component</h1>}
            {cartList && cartList.length > 0 ? 
                <Fragment>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : 
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                    //return item.name
                                    return <CartItemComponent
                                                    items={item}
                                                    key={item._id}
                                                    readOnly = {props.readOnly}
                                        />
                                })
                            } 
                        </tbody>
                    </table>

                    <CartSummaryComponent data={recalculate(cartList)} readOnly={props.readOnly} />

                    {
                        props.readOnly ? <></> : 
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                        Save Cart
                                </button>
                                <button onClick={()=>clearCartDb(cartList, user._id, clearCart)} >
                                    Clear Cart
                                </button>
                                
                                <button onClick={func} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }
                </Fragment> 
                : 
                <b>Cart Is Empty!!! Please add some products.</b>}               
        </Fragment>
    )
}

export default CartComponent;

//CartComponent - fetch the cart and make it configurabale on the basis of property
//CartItemComponent - to edit the quantity
//CartSummaryComponent - show the cart summary