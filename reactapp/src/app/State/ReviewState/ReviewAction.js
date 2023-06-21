import * as ActionTypes from "../actionTypes";

export const addReview = (review) => {
  return {
    type: ActionTypes.ADD_REVIEW,
    payload: {review}
  } 
}

export const emptyTheCart = ()=> {
  return {
    type: ActionTypes.EMPTY_CART_REVIEW
  }
}

//save to mongodb
export const saveCustomerReviews = (reviews)=> {
  console.log("in fiel ReviewAction.js reviews: ", reviews)

  return function (dispatch){

    window.fetch("http://localhost:9000/review/api/savereviews",{
      method: 'POST', //rest method type 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
    .then((reviewResponse)=>reviewResponse.json())
    .then((reviewResponse)=>{
      console.log("in file ReviewAction.js reviewResponse: ", reviewResponse)
      //dispatch(fetchReviews(reviewResponse.name));
    })
    .catch((error)=>{
      console.log("error while saving the reviews in file ReviewAction.js: ", error)
    })
  }
};

//fetch all the customer reviews
export const fetchReviews = (name) => {
    console.log("in file ReviewAction.js fetching Review", name);

    return function(dispatch){
      window.fetch("http://localhost:9000/review/api/getreviews",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:name})})
      .then((reviewResponse)=>reviewResponse.json())
      .then((reviewResponse)=>{
        console.log("in file ReviewAction.js getting reviews: ", reviewResponse)
        dispatch(emptyTheCart());
        dispatch(addReview(reviewResponse));
      })
      .catch((error)=>{
        console.log("in file ReviewAction.js fetching the customer review error: ", error)
      })
  }
}