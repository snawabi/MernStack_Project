import * as ActionTypes from "../actionTypes";

export const  addPaidItem = (item)=> ({
  type: ActionTypes.ADD_PAID_ITEM,
  payload: {item}
})

export const updataPaidOrder = (id, qty) => ({
  type: ActionTypes.UPDATE_PAID_ORDER,
  payload: {
    id,
    qty: parseInt(qty)
  }
});

export const removePaidItem = (id) => ({
  type: ActionTypes.REMOVE_PAID_ITEM,
  payload: {id}
})

export const emptyCart = () => ({
  type: ActionTypes.EMPTY_PAID_ITEM,
})

export const orderDate = (date) => ({
  type: ActionTypes.ORDER_DATE,
  payload: {date}
})

//save to mongoDb
export const saveRecentOrderToDb = (order, userid)=>{
  console.log("order to be saved ", order);

  return function (dispatch){
    window.fetch("http://localhost:9000/recentorder/api/saveRecentOrder", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({order: order, userid: userid})})
    .then(response => response.json())
    .then(recentOrderResponse =>{
        console.log("in file RecentOrderAction.js response ", recentOrderResponse);
    }).catch((error)=>{
      console.log("in file RecentOrderAction.js response error ", error)
    })
  }
}

export const getRecentOrder = (userid) => {

  return function (dispatch){
    console.log("getting recent order", userid);

    window.fetch("http://localhost:9000/recentorder/api/getRecentOrder", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userid:userid})})
      .then (response => response.json())
      .then (usercartresponse => {
          console.log("***in file RecentOrderAction.js response getRecentOrder*****", usercartresponse);
          
          dispatch(emptyCart()); //remove the duplicacy first empty the cart 
          
          //add cart item one by one into CartReducer.js
          for (const item of usercartresponse.order) {
              console.log("item in for of recent order", item);
              let action = addPaidItem(item);
              dispatch(action);    
          }
          
           dispatch(orderDate(usercartresponse.date));                
      })
   .catch((error)=>{
    console.log("in file RecentOrderAction.js error getting user ", error)
   })
  }
}
