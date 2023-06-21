import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveUserToDB } from "../../State/UserState/userActions";

let UserHook = () => {
  //useState is the replacement of this.state in consttuctor and this.setState in callback
  // it allows us to initialize a value and a callback to update the state
  let [session, setSession] = useState("React");
  let [studentName, setStudentName] = useState("Alex");

  //userSelector will do the job of mapStateToProps and make component subcriber to state
  let user = useSelector((state) => state.userReducer.User);

  //initialization of default values using ref
  let userNameRef = useRef(null);
  let passwordRef = useRef(null);
  let streetRef = useRef(null);
  let mobileRef = useRef(null);

  //when first rendering is done and UI can be accessed - componentDidMount
  //useeffect is the hook that we use to make it work as componentDidMount, componentWillUnmount
  useEffect(() => {
    //assign the values we got from reducer
    userNameRef.current.value = user.userName;
    passwordRef.current.value = user.password;
    streetRef.current.value = user.street;
    mobileRef.current.value = user.mobile;

    // return ()=>{ //this we'll do to make it work like component will unmount
    //      like we did clear interval in component will unmount
    //      doing clearInterval, unsubscribe to any post request etc
    // }
  });

  //useDispatch - is the replacement of mapDispatchToProps and can be used to dispatch action with state to store
  let dispatchUserToDb = useDispatch();

  // once user has updated values in respective textbixes read it and send back to server
  let readFormData = (evt) => {
    let user = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
      street: streetRef.current.value,
      mobile: mobileRef.current.value,
    };

    //alert(JSON.stringify(user));

    dispatchUserToDb(saveUserToDB(user));

    evt.preventDefault();
  };

  return (
    <>
      <h1>User Hook Component</h1>
      <form className={"form col-md-10 userHook"} onSubmit={readFormData}>
        <label>
          <b>User Name :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            ref={userNameRef}
            placeholder="Please enter user name"
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          <b>Password :</b>
          <input
            type="password"
            className={"form-control col-md-12"}
            ref={passwordRef}
            placeholder="Please enter password"
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          <b>Street :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            ref={streetRef}
            placeholder="Please enter address"
            maxLength={20}
          />
        </label>
        <br />
        <label>
          <b>Mobile :</b>
          <input
            type="number"
            className={"form-control col-md-12"}
            ref={mobileRef}
            placeholder="Please enter mobile"
          />
        </label>

        {/* <label>
          <b>Session :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            value={session}
            placeholder="Please enter mobile"
            onChange={(evt) => setSession(evt.target.value)}
          />
        </label> */}

        <br />
        <input type="submit" className={"btn btn-primary"} value="Signin" />
      </form>
    </>
  );
};

export default UserHook;

//implement everything in StudentHook and save student info to DB
//implement using useState way as we did for session
