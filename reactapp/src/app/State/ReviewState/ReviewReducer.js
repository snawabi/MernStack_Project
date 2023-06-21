import * as ActionTypes from "../actionTypes";

const INITITIAL_STATE = {
  customerReviews: [],
  defaultReview: {
    name: "Manto",
    rating: "Tasty",
    comment: "Could use some salt"
  }
}

export default function ReviewReducer(state=INITITIAL_STATE, action){
  console.log("in file ReviewReducer.js with action: ", action)

  switch(action.type){
    //add all the related product
    case ActionTypes.ADD_REVIEW:
      return {...state, customerReviews: action.payload.review}

    //remove present reviews
    case ActionTypes.EMPTY_CART_REVIEW:
      return [];

    default:
      return state;
  }
}