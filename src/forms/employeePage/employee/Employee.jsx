import React from "react";

//---------------NOT USED----------------------
 
const Employee = (props) => {
  
  return (
    <div
      style={{
        width: "240px",
        height: "240px",
        background: "#CCCAC9",
        borderRadius: "10px",
        overflowY: "auto",
        margin: "4px",
      }}
    >
      <h3>{props.firstName} {props.lastName}</h3>
      <p>{props.email}</p>
      <span style={{ marginTop: "8px" }}>{props.description}</span>
    </div>
  );
};
 
export default Employee;