import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import CartComponent from "../Cart/CartComponent";
import { saveRecentOrderToDb } from "../../State/RecentOrderState/RecentOrderAction";
import { addPaidItem } from "../../State/RecentOrderState/RecentOrderAction";


let CheckOutComponent = (props) => {
  let userInfo = useSelector((state)=>state.userReducer.User)
  let cartList = useSelector((state)=>state.cartReducer);
  let couponInStore = useSelector((state) => state.couponReducer.coupon)

  let dispatchRecentOrderToDb = useDispatch();
  let dispatchToReducer = useDispatch();

  let [showHide, setShowHide] = useState(false)

  // var orderDate = new Date()
  // let date = (orderDate.getMonth()+1) +"/"+ orderDate.getDate() +"/"+ orderDate.getFullYear();

  let savePaidItem = (cartList, userid) =>{
    dispatchRecentOrderToDb(saveRecentOrderToDb(cartList, userid))
  }

  let showHidefunc = () => {
    setShowHide(!showHide)
  }
  
  return (
    <>  
      {showHide ?  
        <div className="border border-secondary text-center p-4 m-5 rounded">
          <h1>Thank you for the payment, your items are under the process.</h1>
        </div>
      : 
        <div className="m-5">
          <h5>Name: <b>{userInfo.userName}</b></h5>
          <h5>Current Address: <b>{userInfo.street}</b></h5>      

          {!couponInStore ?
            <div className="form-group">
              <h5>Coupon is not applied. Click on the link to generate coupon.  
                <Link to="/coupon"> Coupon page</Link>
              </h5>
            </div>
          :
            <div>
              <h5>Coupon has been applied</h5>
              <h5>Coupon Discount code:<b> {couponInStore}</b></h5>
            </div>            
          }
    
          <CartComponent readOnly = {props.readOnly}/>
          <div className="mt-4"> 
            <button className="btn-primary center" onClick={()=>{savePaidItem(cartList, userInfo._id); showHidefunc()}}>Make Payment</button>   
          </div>
        </div>    
      } 
   </>
  )
}

export default CheckOutComponent;