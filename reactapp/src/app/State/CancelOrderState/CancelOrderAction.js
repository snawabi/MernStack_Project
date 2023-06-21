import * as ActionTypes from "../actionTypes";

export const addCancelOrder = (order)=> ({
  type: ActionTypes.ADD_CANCEL_ORDER,
  payload: {order}
})

export const removeOrder = (id) => ({
  type: ActionTypes.REMOVE_ORDER,
  payload: {id}
})

export const emptyCart =() => ({
  type: ActionTypes.EMPTY_CANCEL_ORDER_CART
});

// export const cancelOrderDate = (date) => ({
//   type: ActionTypes.CANCEL_ORDER_DATE,
//   paylod: date
// })

//save canel order to mongoDb
export const saveCancelOrderToDb = (order, userid)=>{
  console.log("cancel order to be saved ", order);

  return function (dispatch){
    window.fetch("http://localhost:9000/cancelorder/api/saveCancelOrder", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({order: order, userid: userid})})
    .then(response => response.json())
    .then(recentOrderResponse =>{
        console.log("in file CancelOrderAction.js response ", recentOrderResponse);
    }).catch((error)=>{
      console.log("in file CancelOrderAction.js response error ", error)
    })
  }
}

export const getCancelOrder = (userid) => {

  return function (dispatch){
    console.log("getting recent order", userid);

    window.fetch("http://localhost:9000/cancelorder/api/getCancelOrder", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userid:userid})})
      .then (response => response.json())
      .then (usercartresponse => {
          console.log("%%%%%%in file CancelOrderAction.js response getRecentOrder%%%%%%%%", usercartresponse.cancelOrder);
          
          dispatch(emptyCart()); //remove the duplicacy first empty the cart 
          
          //add canel order one by one into cancelOrderReducer.js
          for (const item of usercartresponse.cancelOrder) {
              console.log("item in for of cancel order", item);
              let action = addCancelOrder(item);
              dispatch(action);    
          }
          //dispatch(addCancelOrder(usercartresponse.cancelOrder))
          
          //  dispatch(cancelOrderDate(usercartresponse.date));                
      })
   .catch((error)=>{
    console.log("in file CancelOrderAction.js error getting user ", error)
   })
  }
}
