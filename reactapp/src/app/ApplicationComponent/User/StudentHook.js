import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { user2SaveToDB } from "../../State/UserState/user2SaveToDb";

const StudentHook = () => {
  let dipatchStudentDataToDB = useDispatch();
  let student = useSelector((state) => state.userReducer.User2);

  let [studentName, setStudentName] = useState("Rameen");

  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let addressRef = useRef(null);
  let cityRef = useRef(null);
  let stateRef = useRef(null);
  let zipRef = useRef(null);

  useEffect(() => {
    emailRef.current.value = student.email;
    passwordRef.current.value = student.password;
    addressRef.current.value = student.address;
    cityRef.current.value = student.city;
    stateRef.current.value = student.state;
    zipRef.current.value = student.zip;
  });

  let submitForm = (evt) => {
    let studentData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
    };

    dipatchStudentDataToDB(user2SaveToDB(studentData));

    evt.preventDefault();
  };

  return (
    <>
      <h1 className="m-4">SignUp </h1>
      <div className=" row card-body m-4">
        <div className="col-6">
          <form onSubmit={submitForm}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control email"
                  ref={emailRef}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control password"
                  ref={passwordRef}
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control address"
                placeholder="Address"
                ref={addressRef}
              ></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>City</label>
                <input
                  type="text"
                  className="form-control city"
                  ref={cityRef}
                ></input>
              </div>
              <div className="form-group col-md-4">
                <label>State</label>
                <input
                  type="text"
                  className="form-control state"
                  ref={stateRef}
                ></input>
              </div>
              <div className="form-group col-md-2">
                <label>Zip</label>
                <input
                  type="text"
                  className="form-control zip"
                  ref={zipRef}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label>Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={studentName}
                  onChange={(evt) => setStudentName(evt.target.value)}
                ></input>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentHook;
