import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveToCoupan } from "../../State/CoupanState/couponAction";
import { useNavigate } from "react-router-dom";

let CoupanComponent = ()=> {

 //let coupanInStore = useSelector((state) => state.couponReducer.coupon)
 let navigateToCheckOut = useNavigate();
 let dispatchToCoupan = useDispatch();

 let generateRandomNum =()=>{
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
    let a = letters[Math.floor(Math.random() * letters.length)] ;
    let b = letters[Math.floor(Math.random() * letters.length)] ;
    let c = letters[Math.floor(Math.random() * letters.length)] ;
    let d = letters[Math.floor(Math.random() * letters.length)] ;
    let e = letters[Math.floor(Math.random() * letters.length)] ;
    let f = letters[Math.floor(Math.random() * letters.length)] ;
    
    let randomNum = a + b + c + d + e + f;

    dispatchToCoupan(saveToCoupan(randomNum));

     navigateToCheckOut("/checkout");

  }

  return (
    <>
      <div className="m-5">
        <button className="btn-primary" onClick={generateRandomNum}>Generate Coupon</button>
        {/* <h5>Coupan generated: <b>{coupanInStore}</b></h5> */}
      </div>
    </>
  )
}

export default CoupanComponent;