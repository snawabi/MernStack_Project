import * as actionTypes from "../actionTypes";
import axios from "axios";
import { getUserCart } from "../CartState/CartActions";
import {getRecentOrder} from "../RecentOrderState/RecentOrderAction"
import {getCancelOrder} from "../CancelOrderState/CancelOrderAction"

export const AddUserToStoreAction = (newuser) => {
  return {
    type: actionTypes.AddUserToStore,
    payload: newuser,
  };
};

export const AddUser2ToStoreAction = (newuser2) => {
  return {
    type: actionTypes.AddUser2ToStore,
    payload: newuser2,
  };
};

export const userLogout =() => {
  return {
    type: actionTypes.USER_LOGOUT
  };
};


// export const AddProductToStoreAction = (product) => {
//   return {
//     type: actionTypes.AddProductToStore,
//     payload: product,
//   };
// };

//create action to save the user to mongoDB
export const saveUserToDB = (newuser) => {
  //newuser is json object
  // thunk - makes it behave synchronously
  return (dispatch) => {
    // here we go with ajax call : to save data to the server or fetch it from the server
    // using fetch method of react
    console.log(
      "called by dispatch and synced by thunk inside userAction.js file"
    );
    console.log(" 3 userAction.js above axios.post()");
    //dispatch(loading(true));
    axios
      .post(
        "http://localhost:9000/user/api/signinupuser", //uri or end point of singninup api
        newuser //passing user object to be read as req.body
      )
      // get data from server
      .then((ServerData) => {
        let signdUser = ServerData.data;
        alert(JSON.stringify(signdUser));
        //sending user to the store
        console.log(
          " 4 userAction.js above dispatch(AddUserToStoreAction(signdUser)) "
        );
        dispatch(AddUserToStoreAction(signdUser)); //dispatching action with signed user
        
        console.log(
          " 5 userAction.js below dispatch(AddUserToStoreAction(signdUser)) "
        );
          //console.log("getRecentOrder user id: ", signdUser._id)
        dispatch(getUserCart(signdUser._id))
        dispatch(getRecentOrder(signdUser._id))
        dispatch(getCancelOrder(signdUser._id))
      
      })
      .catch((err) => {
        console.log("err in login ", err);
      });
  };
};
