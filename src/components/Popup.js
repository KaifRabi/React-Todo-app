import React from "react";

export default function Popup(props) {
  return (
    <>
      <div className={props.update === 1 ? "popup" : ""}>{props.func}</div>
    </>
  );
}
