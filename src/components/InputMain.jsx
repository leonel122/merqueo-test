import React from "react";

export default function InputMain(props) {
  return (
    <input
      {...props}
      type="text"
      name="post"
      autocomplete="off"
      placeholder={props.placeholder}
    ></input>
  );
}
