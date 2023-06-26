import React, { Fragment, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePaidItem } from "../../State/RecentOrderState/RecentOrderAction";
import { saveCancelOrderToDb } from "../../State/CancelOrderState/CancelOrderAction";
import userReducer from './../../State/UserState/userReducer';
import {addCancelOrder} from  "../../State/CancelOrderState/CancelOrderAction"
import { useNavigate } from "react-router-dom";
import { addReview } from "../../State/ReviewState/ReviewAction";

// var moment = require("moment");
 let dayjs = require("dayjs")

let RecentOrderItemComponent = ({orders})=>{
  // let order = props.orders
 // let userInfo = useSelector((state)=>state.userReducer.User)
  let dateOrdered = useSelector((state)=> state.recentOrderReducer.date)

  //getting dates and formating date
  let orderDate = dayjs(dateOrdered).format('MMMM D, YYYY')
  let deliveredDate = dayjs(orderDate).add(2,'day')
  let formatDeliveredDate = dayjs(deliveredDate).format('MMMM D, YYYY')
  let currentDate = new Date();
  let formatCurrentDate = dayjs(currentDate).format('MMMM D, YYYY')

  // console.log("orderDate: ", orderDate)
  // console.log("formatDeliveredDate: ", formatDeliveredDate)
  // console.log("formatCurrentDate ", formatCurrentDate)

  let dispatchToRecentOrderRemove = useDispatch();
  let dispatchAddToCancelOrder = useDispatch();
  let dispatchAddReviewName = useDispatch();

  let removeOrder = (orderid)=> {
    dispatchToRecentOrderRemove(removePaidItem(orderid))
  }

  let saveCancelOrder = (orders) => {
    dispatchAddToCancelOrder(addCancelOrder(orders));
    //console.log("____useid___", userid)
  }

  let saveToReview = (productName) =>{
    dispatchAddReviewName(addReview(productName))
  }

  let navigate = useNavigate();

  let showRatePage= (evt) =>{
    navigate("/review");
    //evt.preventDefault();
  };

  let getOrderName = {
    name: orders.name
  }

  // console.log("++++cancelOrderList++++", cancelOrderList)

  return (
    <tr>
      <td>{orders.name}</td>
      <td>{orders.price}</td>
      <td>{orders.desc}</td>
      <td>{orders.rating}</td>
      <td>{orders.qty}</td>
      <td>{orders.price * orders.qty}</td>
      <td>{orderDate}</td>

      {formatCurrentDate > formatDeliveredDate ?
       <Fragment>
          <td>Delivered</td>
          <td>Cancellation expired</td>
          <td><button className="btn btn-primary" onClick={()=>{showRatePage(); saveToReview(getOrderName)}}>Rate Product</button></td>
          
       </Fragment>
      :
        <Fragment>
          <td>In Process</td>
          <td><button className="btn-primary" onClick={()=>{removeOrder(orders._id); saveCancelOrder(orders)}}>Cancel</button></td>
          <td>Wait</td>
        </Fragment>

      } 
    </tr>
  )
}

export default RecentOrderItemComponent;