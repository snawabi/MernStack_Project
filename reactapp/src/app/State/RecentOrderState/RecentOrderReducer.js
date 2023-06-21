
import * as ActionTypes from "../actionTypes";

const INTITIAL_STATE = {
  orderReceived: [],
  date: 0
}

export default function RecentOrderReducer (state = INTITIAL_STATE, action){

 // console.log("in RecentOrderReducer.js ", action)
  switch(action.type){

    // add paid item to the list
    case ActionTypes.ADD_PAID_ITEM:
      let newState = state.orderReceived.filter(item => item._id != action.payload.item._id);
      return {...state, orderReceived:[...newState,  action.payload.item]};

    // case ActionTypes.UPDATE_PAID_ORDER:
    //   return state.map((order) => {
    //     if (order._id == action.payload.id){
    //       return {...order, qty: action.payload.qty}
    //     }
    //     return order;
    //   })
    
    case ActionTypes.REMOVE_PAID_ITEM:
      let orderCanceled = state.orderReceived.filter((order)=>order._id != action.payload.id)
      return {...state, orderReceived: [...orderCanceled]}

    // case ActionTypes.EMPTY_PAID_ITEM:
    //   return []

    case ActionTypes.ORDER_DATE:
      return {...state, date: action.payload.date}

    default:
      return state;
      
  }
}