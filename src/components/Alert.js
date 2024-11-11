import React from "react";

function Alert(props) {
    if (!props.alert) {
      return null; // Return nothing if there's no alert object
    }
  return (
    <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{props.alert.type} : </strong>{props.alert.msg} 
    </div>
  );
}

export default Alert;
