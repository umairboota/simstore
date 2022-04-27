import React from "react";
import logo from "../images/logo.jpg"

export default function Logo() {
    const style ={
        height: 32,
    }
  return (
    <div>
      <img style={style} className="" src={logo} alt="logo" />
    </div>
  );
}
