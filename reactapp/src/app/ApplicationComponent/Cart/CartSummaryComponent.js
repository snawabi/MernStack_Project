import React from "react";

const CartSummaryComponent = (props)=>{
    let {
        count   
    } = props.data;


    return(
        <div>
            {props.readOnly ? <h5> Cart Summary </h5> : <h2> Cart Summary </h2>}
            <p> Amount: {props.data.amount} </p>
            <p> Products Count: {count} </p>
        </div>
    )
}

export default CartSummaryComponent;