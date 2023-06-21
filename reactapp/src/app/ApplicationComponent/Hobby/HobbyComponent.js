import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { json } from "react-router-dom";

let HobbyComponent = ()=>{

  let [hobby, setHobby]= useState();
  let dispatchToSave = useDispatch();

  let saveHobby = (evt)=> {
    let newHobby = hobby

    alert("new hobby has been added: " + JSON.stringify(newHobby))
    
    //dispatchToSave(saveHobbyToDb(newHobby))

  }

  return (
    <>
      <div className="row m-3">
        <div className="col-12">
            <h4>Hobbies</h4>
        </div>
     
        <div className="col-4">
          <input type="text" onChange={(evt)=>setHobby(evt.target.value)} placeholder="Type your hobbie"/>
        </div>
        <div className="col-2">
          <button className="btn-primary col-6" onClick={saveHobby}>Save</button>
        </div>
        
        


      </div>
    
    </>
  )
}

export default HobbyComponent;