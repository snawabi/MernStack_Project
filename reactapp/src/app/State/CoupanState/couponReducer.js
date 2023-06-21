import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = {
    coupon: ""
}

const couponReducer = (state = INITIAL_STATE, action)=>{

  //console.log("in file coupanReducer ", action)

  switch(action.type){  
    case ActionTypes.ADD_COUPAN:
      return {...state, coupon: action.payload }

    default:
      return state;
      break;
  }

}

export default couponReducer;