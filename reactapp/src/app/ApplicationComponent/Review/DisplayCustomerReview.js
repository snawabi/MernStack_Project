import React from "react";
import { useSelector} from "react-redux";

let DisplayCustomerReview = () => {

  let customerReviewList = useSelector((state)=>state.reviewReducer.customerReviews);


  return (
    <>
      <h2>Customer Rating</h2>
      <div className="w-100">
        {customerReviewList && customerReviewList.length > 0 ? 
          customerReviewList.map(review =>{
            return (
              <div className="list-group">
                <div className="list-group-item list-group-item-action"> 
                  <div className="d=flex w-200 justify-content-between">
                    <h3 className="mb-1">Product Name: {review.name}</h3>
                  </div>
                  <p className="mb-1">Rate: {review.rating}</p>
                  <p className="mb-1">Comment: {review.comment}</p>
                </div>
              </div>
            )
          })
          :
          <h3>No Customer Review</h3>
        }
      </div>
    </>
  )
}

export default DisplayCustomerReview;