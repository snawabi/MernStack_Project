import React, { Component, PureComponent, Ref } from "react";
import PropTypes from "prop-types";
import { ChildComp } from "./ChildComponent";

//export default class Home extends Component {
//this will compare all the states and props before calling render method so shouldCompUpdate is not req
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.User = props.user;

    this.userName = props.userName;
    //we can write state object to create new virtual dom
    this.state = {
      UserName: props.user.Name,
      UserAge: props.user.Age,
      Timer: 1,
      ChildInfo: "Parent Is First Component!!",
      Address: "Somewhere on earth",
      Session: "Awsome React",
    };

    //state : is mutable and upon change of state a new v-dom gets created which will eventually render on browser
    //this.setState
    //this.forceUpdate
    this.incrementTimer();

    //UI is not ready we should not access UI/HTML or also not make any state changes or server call

    //although it is recommended to not directly access the DOM but by using ref htmls we can access and
    //manipulate them directly
    this.UserAddress = React.createRef(); //reference that can be used to link html in react
    this.SessionInfo = React.createRef();
  }

  incrementAge = () => {
    // this.state.UserAge++;
    // console.log(this.state.UserAge)

    //not recommended
    //this.forceUpdate();//it will skip all life cycle methods and just call the render
    // this.state.UserName = "Alex";
    // this.forceUpdate();//updates the virtual dom forcefully

    //recommended to use - as it follows all the update life cycle methods
    this.setState({
      UserAge: this.state.UserAge + 1,
      //UserName : "Garrick"
    });
  };

  incrementTimer = () => {
    // this.interval = setInterval(() => {
    //     this.setState({
    //         Timer : this.state.Timer + 1
    //     })
    //     console.log(this.state.Timer);
    // }, 1000);
  };

  //event binding in textbox, two way data binding in react
  updateNameHandler = (evt) => {
    let targetValue = evt.target.value;
    console.log(targetValue);

    this.setState({
      UserName: targetValue,
    });
    evt.preventDefault();
  };

  //creation life cycle method
  ///view or ui is ready, we can access the html(if required), and do state changes here
  componentDidMount() {
    console.log("Component Did Mount is called");

    // setTimeout(() => {
    //     this.UserAddress.current.focus() //sets the foucus to this textbox
    //     this.UserAddress.current.value = "This is my new address"
    // }, 5000);
  }

  //address - 5, product - 20, user - 10, cart - 13 => 50 states
  //if 70-90% of state and props supposed to be updated we should choose PureComponent instead
  //update life cycle methods
  // shouldComponentUpdate(nextProps, nextState){
  //     console.log("nextProps ", nextProps)
  //     console.log("nextState ", nextState)

  //     if (this.state.UserName === nextState.UserName) {
  //         return false;
  //     } else {
  //         return true;
  //     }
  // }

  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log("getSnapshotBeforeUpdate");
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
    return {
      prevState,
      prevProps,
    };
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("componentDidUpdate");
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
  }

  //destruction life cycle method
  //clear all subscriptions of API or calls like setInterval so that it didn't impact perfornmace
  componentWillUnmount() {
    console.log("Component Will UnMount called!!");
    clearInterval(this.interval);
  }

  getChildData = (childInfo) => {
    alert("child Info " + childInfo);
    this.setState({
      ChildInfo: childInfo,
    });
  };

  //supporting uncontrolled component rendering
  formSubmit = (evt) => {
    let address = this.UserAddress.current.value;
    let session = this.SessionInfo.current.value;

    this.setState({
      Address: address,
      Session: session,
    });

    evt.preventDefault();
  };

  render() {
    console.log("Home Component Is rendered");
    return (
      <div className={"loadimage form"}>
        <h1>{this.state.title}</h1>
        <b className="feature">{"Product Feature's :"}</b>
        <ul>
          <li>Sign up new users</li>
          <li>Login existing users.</li>
          <li>Allow user's to add to cart.</li>
          <li>Save the user's cart.</li>
          <li>Checkout and pay for items.</li>
          <li>Allow users to cancel the order.</li>
          <li>Allow users to reorder the cart.</li>
          <li>Add products/items to create product collection.</li>
          <li>Allow users to give ratings to each product.</li>
          <li>Have notifications on top right with logout.</li>
        </ul>
      </div>
      // <>
      //     <h3><b><i> This is Home Component </i></b></h3>
      //     <h4><b>Props Values : </b> {this.User.Age} {this.User.Name}</h4>
      //     <h1>{"Timer " + this.state.Timer}</h1>
      //     <div>
      //         <b>State Values</b>
      //         <b>{this.state.UserAge }</b>
      //     </div>
      //     <b>{this.state.UserName }</b>
      //         <input type="button" className="button" onClick={this.incrementAge}
      //                 value={"Increment Age"}></input>

      //     <input type="text" value={this.state.UserName}
      //             placeholder="Please Type Your Name" onChange={this.updateNameHandler}
      //             ></input>
      //     <hr/>
      //     <h2>{this.state.ChildInfo}</h2>
      //     <ChildComp childData={"Grand Child of Application component"} childEvent={this.getChildData}/>

      //     <hr/>

      //     {/* uncontrolled component */}
      //     <form action="localhost:9000/api/user/save" onSubmit={this.formSubmit}>
      //         <label>
      //             Address:
      //         <input type={"text"} ref={this.UserAddress} className={"address"} id={"address"}
      //                 placeholder="Please add user address!!!" maxLength={25}></input>
      //         </label>

      //         <label>
      //             Session:
      //         <input type={"text"} ref={this.SessionInfo} placeholder="Please add session details!!!" maxLength={25}></input>
      //         </label>

      //         <input type="submit" value="Submit" />
      //     </form>
      //     <h2>{this.state.Address}</h2>
      //     <h3>UserName : {this.userName}</h3>
      //     <h2>{this.state.Session}</h2>
      // </>
    );
  }
}

// Home.defaultProps = {
//     user : {
//         Name : "Sohail Default",
//         Age : 18
//     }
// }

Home.propTypes = {
  userName: PropTypes.string.isRequired,
};
