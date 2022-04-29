import React from "react";
import banner from "../images/banner.png";
import bolt from "../images/Bolt.jpg";
import Cards from "./Cards";


export default function Devices() {
  
  return (
    <div className="mb-11">
      <section className=" mb-11">
        <img src={banner} alt="Loading" className="banner-size" />
      </section>
      <Cards title="4G-Device-BOLT+" image ={bolt} company ="Zong"/>
    </div>
  );
}
