import * as ActionTypes from "../actionTypes";

// const INITIAL_STATE = {
//   cancelOrder: [],
//   date: 0
// }

 const INITIAL_STATE = []

export default function CancelOrderReducer (state=INITIAL_STATE, action){

  //console.log("in file CancelOrderReducer.js getting action.payload ", action.payload);
  switch(action.type){

    //add cancel order to the list
    case ActionTypes.ADD_CANCEL_ORDER:
      // let newState = state.filter(item => item._id != action.payload.item._id);
      // return [...state, ...newState,  action.payload.item]; 
      return [...state,  action.payload.order]

    case ActionTypes.REMOVE_ORDER:
      return state.filter(item => item._id!=action.payload.id)
      
    case ActionTypes.CANCEL_ORDER_DATE:
      return {...state, date: action.payload.date}

    case ActionTypes.EMPTY_CANCEL_ORDER_CART:
      return [];

    default:
      return state;
  }
}