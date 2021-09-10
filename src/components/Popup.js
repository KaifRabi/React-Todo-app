import React from "react";

export default function Popup(props) {
  return (
    <>
      {console.log(props.update)}
      <div className={props.update === 1 ? "popup" : ""}>{props.func}</div>
    </>
  );
}
