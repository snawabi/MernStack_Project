import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveCancelOrderToDb } from "../../State/CancelOrderState/CancelOrderAction";
import CancelOrderItemComponent from "./CancelOrderItemComponent";
import CancelOrderDiscount from "./CancelOrderDiscount";



let CancelOrderComponent = () => {
  
  let cancelOrderReceived = useSelector((state)=> state.cancelOrderReducer);
  let userInfo = useSelector((state)=> state.userReducer.User);

  let showDiscount = (cancelOrder) => {
    let orderName = "",
    discountAmount = "10%"

    for (let order of cancelOrder){
      orderName += order.name;
    }

    return {
      orderName,
      discountAmount
    }
  }

  let dispatchCancelOrderToDb = useDispatch();

  let saveCancelOrder = (orderList, userid) => {
    dispatchCancelOrderToDb(saveCancelOrderToDb(orderList, userid));
  }

  return (
    <>
      
      <h1>Cancel Order Component</h1>
      
      {cancelOrderReceived && cancelOrderReceived.length > 0 ? 
        <div>
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Add To Cart</th>
                    {/* <th>Quantity</th>
                    <th>Total</th>
                    <th>Date Ordered</th> */}
                </tr>
              </thead>
            <tbody>
                {
                  
                  cancelOrderReceived.map(order=>{
                        // return order.name
                      return <CancelOrderItemComponent
                                      orders={order}
                                      key={order._id}
                          />
                  })
                } 
            </tbody>
          </table>
          
          <CancelOrderDiscount data={showDiscount(cancelOrderReceived)}/>

          <button className="mt-5" onClick={()=>{saveCancelOrder(cancelOrderReceived, userInfo._id)}}>Save</button>
          
        </div>
      :
        <h3>No order has been canceled</h3>
      }
        

    </>
  )
}

export default CancelOrderComponent;