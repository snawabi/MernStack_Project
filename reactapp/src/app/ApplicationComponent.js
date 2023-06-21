import React, { Component, PureComponent, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./app.css";

import Home from "./Common/HomeComponent";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import { ChildComp } from "./Common/ChildComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundPage";
import User from "./ApplicationComponent/User/UserContainer";
import User2 from "./ApplicationComponent/User/User2Container";
import UserHook from "./ApplicationComponent/User/UserHook";
import StudentHook from "./ApplicationComponent/User/StudentHook";
//import Product from "./ApplicationComponent/User/ProductComponent";
import ThankYouComponent from "./Common/thankYouComponent";
import ProductComponent from "./ApplicationComponent/Product/ProductComponent";
import DisplayProduct from "./ApplicationComponent/Product/DisplayProduct";
import CartComponent from "./ApplicationComponent/Cart/CartComponent";
import CheckOutComponent from "./ApplicationComponent/CheckOut/CheckOutComponent";
import HobbyComponent from "./ApplicationComponent/Hobby/HobbyComponent";
import CoupanComponent from "./ApplicationComponent/Coupon/CouponComponent";
import RecentOrderComponent from "./ApplicationComponent/RecentOrder/RecentOrderComponent";
import CancelOrderComponent from "./ApplicationComponent/CancelOrder/CancelOrderComponent";
import ReviewComponent from "./ApplicationComponent/Review/ReviewComponent";
import DisplayCustomerReview from "./ApplicationComponent/Review/DisplayCustomerReview";

export default class Application extends Component {
  constructor(props) {
    //props is read only object is used to share info from one comp to another
    super(props);
    this.User = {
      Name: "Tien",
      Age: 19,
    };
  }

  render() {
    return (
      <Router>
        <Header />

        <Routes>
          {/* <Route path="/" element={<Home user={this.User} />} /> */}
          <Route path="/" element={<Navigate replace to={"/user"} />} />
          <Route
            path="/home"
            element={<Home user={this.User} userName={"james"} />}
          />
          <Route path="/user" element={<User />} />
          <Route path="/user2" element={<User2 />} />
          <Route path="/userk" element={<UserHook />} />
          <Route path="/student" element={<StudentHook />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/display" element={<DisplayProduct />} />
          <Route path="/checkout" element={<CheckOutComponent readOnly={true}/>} />
          <Route path="/hobby" element={<HobbyComponent/>} />
          <Route path="/coupon" element={<CoupanComponent/>} />
          <Route path="/recentorder" element={<RecentOrderComponent/>} />
          <Route path="/cancelorder" element={<CancelOrderComponent/>} />
          <Route path="/review" element={<ReviewComponent/>} />
          <Route path="/customerreview" element={<DisplayCustomerReview/>} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/thankyou" element={<ThankYouComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    );
  }
}

export const pi = 3.14;

//component - is a functional class/function which does single/multiple things independently

// const Application = ()=>{

//     let name = "Awsome React!!!"

//     //return the UI or virtual dom, only one top level parent is allowed
//     //JSX- javascript like xml structure
//     //class/home/header/footer/about/notfound/product/cart/...etc
//     return(
//         <>
//             <div>
//                 <h2>Application Component</h2>
//             </div>
//             <div>
//                 <b><i>{name}</i></b>
//             </div>
//         </>
//     )
// }

// export default Application;

//create your own component with your name and export it as default then named and then with some other exports
