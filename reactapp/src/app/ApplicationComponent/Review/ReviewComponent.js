import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { saveCustomerReviews } from "../../State/ReviewState/ReviewAction";


let ReviewComponent = () => {

  let defaultRev = useSelector((state)=> state.reviewReducer.customerReviews);
  let dispatchToDb = useDispatch();

  //let nameRef = useRef(null);
  let ratingRef = useRef(null);
  let commentRef = useRef(null);

  // useEffect(() => {
  //   nameRef.current.value = defaultRev.name;
  // })

  // let [name, setName] = useState(defaultRev.name);
  // let [rating, setRating] = useState(defaultRev.rating);
  // let [comment, setComment]= useState(defaultRev.comment)


  let saveCommentClick = (event) => {
    // let reviewsToBeSaved = {name, rating, comment};
    let reviewsToBeSaved = {
      name: defaultRev.name,
      rating: ratingRef.current.value,
      comment: commentRef.current.value,
    };

    dispatchToDb(saveCustomerReviews(reviewsToBeSaved))
    event.preventDefault();
  }

  return(
    <>
      <h1>Customer Reviews</h1>
      <section className={"componentClass"}>

        <div className="form col-md-8">
          <div className="col-md-8">
            <h4>Product Name: <b>{defaultRev.name}</b></h4>
            {/* <input type="text" className="form-control col-md-12" ref={nameRef} /> */}
          </div>

          <div className="col-md-10 mt-3">
            <b>Rating:</b>
            <input type="number" className="form-control col-md-6"  placeholder="Please rate the product from 1-10" ref={ratingRef} minLength={0} maxLength={10}/>
          </div>

          <div className="col-md-10 mt-3">
            <b>Comment:</b>
          <textarea className="form-control col-md-12" id="validationTextarea" placeholder="Please write a comment for the product" ref={commentRef} />
          </div>

          <button className="btn btn-primary mt-5" onClick={saveCommentClick}>Save Comment</button>

        </div>

      </section>
    
    </>
  )
}

export default ReviewComponent;