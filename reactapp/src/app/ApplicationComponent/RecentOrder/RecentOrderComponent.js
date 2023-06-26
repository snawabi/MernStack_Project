import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveRecentOrderToDb } from "../../State/RecentOrderState/RecentOrderAction";
import RecentOrderItemComponent from "./RecentOrderItemComponent";

let RecentOrderComponent = ()=> {

  let recentOrder = useSelector((state)=> state.recentOrderReducer.orderReceived)
  let userInfo = useSelector((state)=> state.userReducer.User)

  let dispatchRecentOrderToDb = useDispatch();

  // var orderDate = new Date()
  // let date = (orderDate.getMonth()+1) +"/"+ orderDate.getDate() +"/"+ orderDate.getFullYear();
  // console.log("new date: ", date)

  let savePaidItem = (orderList, userid) =>{
    dispatchRecentOrderToDb(saveRecentOrderToDb(orderList, userid))
  }

  // let senddataBack = () => {
  //   for (const item of recentOrder){
  //     console.log("******* order saved ", item);
  //   }
  // }

  return(
    <>
      <h1>Recent Order Component</h1>
      {recentOrder && recentOrder.length > 0 ? 
        <Fragment>
            <table className="table table-hover">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Rating</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Date Ordered</th>
                      <th>Delivery</th>
                      <th>Cancel Order</th>
                      <th>Rate</th>
                  </tr>
               </thead>
              <tbody>
                  {
                    recentOrder.map(order=>{
                         //return order._id
                        return <RecentOrderItemComponent
                                        orders={order}
                                        key={order._id}
                            />
                    })
                  } 
              </tbody>
            </table>
            <button className="mt-5 mb-3" onClick={()=>{savePaidItem(recentOrder, userInfo._id)}}>Save Order</button>
        </Fragment>
            
      : 
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
                    <th>Date Ordered</th>
                    <th>Delivery</th>
                    <th>Cancel Order</th>
                </tr>
              </thead>
            <tbody>
              <tr>
                <td>Cart is Empty</td>
              </tr>
            </tbody>
            </table> 
            <button className="mt-5 mb-3" onClick={()=>{savePaidItem(recentOrder, userInfo._id)}}>Save Order</button>
        </Fragment>                  
      }               
        
    </>
  )
}

export default RecentOrderComponent;