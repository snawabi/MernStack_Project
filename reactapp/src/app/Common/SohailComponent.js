import React from "react";

export let Sohail = ({ nameChangedEvent }) => {
  return (
    <>
      <h1>This is Sohail Component</h1>
      <button className="button" onClick={() => nameChangedEvent("Sohail")}>
        Change Name
      </button>
    </>
  );
};
