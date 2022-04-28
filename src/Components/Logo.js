import React from "react";
import logo from "../images/logo.png"

export default function Logo() {
    const style ={
        height: 60,
    }
  return (
    <div>
      <img style={style} className="" src={logo} alt="logo" />
    </div>
  );
}
