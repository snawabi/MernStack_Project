import React, { Fragment } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; //hoooks for navigations
import { connect, useSelector } from "react-redux";
import User2 from "./../ApplicationComponent/User/User2Container";
import NotificationComponent from "../ApplicationComponent/Notification/NotificationComponent";
//connect: connect the react with store

import Dropdown from 'react-bootstrap/Dropdown';

let Header = (props) => {
  //using connect and mapStateToProps
  let userName = props.User.userName; //it is available as props as we are returning from mapSateToProps
  let email = props.User2.email;
  let password2 = props.User2.password;

  //by using useSelector hook
  let street = useSelector((state) => state.userReducer.User.street); //it is mapping store as props

  let goAboutHook = useNavigate();

  let goToAboutClick = (evt) => {
    goAboutHook("/about/2023");
    evt.preventDefault();
  };

  return (
    <>
      Hi <b>{userName + ", "}</b> Welcome to SynergisticIT Shopping Cart
      {userName == "" ?
        <Fragment>
          <b> Please Login to see other features</b> 
          <div className="mt-5">
            <NavLink to="/home" className="button" activeclassname="success">
              Home
            </NavLink>
            <NavLink to="/user" className="button" activeclassname="success">
              User
            </NavLink>
            <NavLink to="/about" className="button" activeclassname="success">
              About
            </NavLink>
            
          </div>     
        </Fragment>
       : 
        <div className="mt-5">
          <NavLink to="/home" className="button" activeclassname="success">
            Home
          </NavLink>
          <NavLink to="/user" className="button" activeclassname="success">
            User
          </NavLink>
          {/* <NavLink to="/user2" className="button" activeclassname="success">
            User2
          </NavLink>
          <NavLink to="/student" className="button" activeclassname="success">
            StudentHook
          </NavLink>
          <NavLink to="/userk" className="button" activeclassname="success">
            UserHook
          </NavLink> */}
          <NavLink to="/product" className="button" activeclassname="success">
            Product
          </NavLink>
          <NavLink to="/cart" className="button" activeclassname="success">
            Cart
          </NavLink>
          <NavLink to="/recentorder" className="button" activeclassname="success">
            Recent Order
          </NavLink>
          <NavLink to="/cancelorder" className="button" activeclassname="success">
            Canceled Order
          </NavLink>
          {/* <NavLink to="/review" className="button" activeclassname="success">
            Customer Reviews
          </NavLink> */}
          {/* <NavLink to="/customerreview" className="button" activeclassname="success">
            Display Reviews
          </NavLink> */}
          <NotificationComponent/>
          <NavLink to="/hobby" className="button" activeclassname="success">
            Hobby
          </NavLink>
          {/* <NavLink to="/notification" className="button" activeclassname="success">
              Notification
          </NavLink> */}
           
          <NavLink to="/about" className="button" activeclassname="success">
            About
          </NavLink>
        </div>
      }

      {/* <p>email for user2: {email}</p>
      <p>Current Address: {street}</p>
      <p>Password for User2 is : {password2}</p> */}
      
      {/* <button onClick={goToAboutClick}>Go To About Page</button> */}
    </>
  );
};

//to make a component subscriber it implements - mapStateToProps
let mapStateToProps = (state) => {
  //state: is a store with all reducers
  return {
    User: state.userReducer.User, // User is read as a props.User
    User2: state.userReducer.User2,
    //Product : state.productReducer.ProductList
  };
};

//to make a component publisher it implements - mapDispatchToProps
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         User : state.userReducer.User
//     }
// }

export default connect(mapStateToProps, null)(Header);

// export let Header2 = (props)=>{
//     return(
//         <>
//             <h1>This is header 2 Component</h1>
//         </>
//     )
// }
