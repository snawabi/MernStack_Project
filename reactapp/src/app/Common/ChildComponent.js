import React from "react";

export let ChildComp = ({ childData, childEvent }) => {
  return (
    <>
      <h1>This is Child Component Component</h1>
      <b>Passed From Application Component {childData}</b>
      <button
        onClick={() =>
          childEvent("Child Component is able to pass data to parent!!!")
        }
      >
        Send To Parent
      </button>
    </>
  );
};

//Que : create a component with your name and pass information from that component to Home component

//class uses class keyword and inherits from Component or PureComponent base classes
//functional component is just a function which returns V-Dom

//as it inherits from base class so can implement Component Life Cycle Methods
//creation life cycle
//constructor - feed data (props)
//render - prepared with html and data
//componentDidMount - finally all initializations are done and component is ready to access

//update life cycle
//shouldComponentUpdate
//getSnapshotBeforeUpated
//componentWillUpdate
//render
//componentDidUpated

//destruction life cycle method
//componentWillUnmout

//class component - has state object to define different virtual dom
//functional components are stateless, however with the help of state hooks it can do the job
