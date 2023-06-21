import React, { Component } from "react";

export default class User2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.User2.email,
      password: props.User2.password,
      address: props.User2.address,
      city: props.User2.city,
      state: props.User2.state,
      zip: props.User2.zip,
    };
  }

  textChangeHandler = (evt) => {
    let target = evt.target;
    let classList = target.classList;
    let value = target.value;

    if (classList.contains("email")) {
      this.setState({
        email: value,
      });
    } else if (classList.contains("password")) {
      this.setState({
        password: value,
      });
    } else if (classList.contains("address")) {
      this.setState({
        address: value,
      });
    } else if (classList.contains("city")) {
      this.setState({
        city: value,
      });
    } else if (classList.contains("state")) {
      this.setState({
        state: value,
      });
    } else if (classList.contains("zip")) {
      this.setState({
        zip: value,
      });
    }
  };

  sendData = (evt) => {
    // this.props.addUser2(this.state);
    this.props.signUpNewUser2(this.state);
    evt.preventDefault();
  };

  render() {
    return (
      <>
        <h1 className="m-4">SignUp </h1>
        <div className=" row card-body m-4">
          <div className="col-6">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input
                    type="email"
                    value={this.state.email}
                    className="form-control email"
                    onChange={this.textChangeHandler}
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control password"
                    onChange={this.textChangeHandler}
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control address"
                  placeholder="Address"
                  onChange={this.textChangeHandler}
                ></input>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control city"
                    onChange={this.textChangeHandler}
                  ></input>
                </div>
                <div className="form-group col-md-4">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control state"
                    onChange={this.textChangeHandler}
                  ></input>
                </div>
                <div className="form-group col-md-2">
                  <label>Zip</label>
                  <input
                    type="text"
                    className="form-control zip"
                    onChange={this.textChangeHandler}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.sendData}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
