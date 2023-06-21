import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../State/CartState/CartActions";
import { removeOrder } from "../../State/CancelOrderState/CancelOrderAction";

let dayjs = require("dayjs")

let CancelOrderItemComponent = (props)=>{
  let order = props.orders

  let cancelDateOrder = useSelector((state)=> state.cancelOrderReducer.date)
  let formatCancelorderDate = dayjs(cancelDateOrder).format('MMMM D, YYYY')

  let dispatchToAddCart = useDispatch();
  let dispatchToRemove = useDispatch();
  
  let AddOrderToCart = (order) => {
    dispatchToAddCart(addItemToCart(order));
  }

  let removeOrderFromCancelOrder = (cancelOrderId) => {
    dispatchToRemove(removeOrder(cancelOrderId))
  }

  return (
    <>
        <tr>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.desc}</td>
            <td>{order.rating}</td>
            <td> <button onClick={()=>{AddOrderToCart(order); removeOrderFromCancelOrder(order._id)}}>ADD</button></td>        
        </tr>
      
        
        
    </>
  )
}

export default CancelOrderItemComponent;