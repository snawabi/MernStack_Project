import * as actionTypes from "../actionTypes";

export const saveToCoupan = (coupon)=>{
  return {
    type: actionTypes.ADD_COUPAN,
    payload: coupon
  };
};