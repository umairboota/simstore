import React, { useState } from "react";
// import { Link } from "react-router-dom";

import image from "../images/simbanner.png";
import SimCard from "./SimCard";

export default function Sim() {
  const [sim, setSim] = useState("jazz");
  const [sNumber, setSNumber] = useState();
  // const [jNumber, setJNumber] = useState();
  // console.log(sim);
  let number, number1, number2, number3, number4, number5, number6, number7, number8, number9, number20, number21, number22,number23, number24, number25;
  if (sim === "jazz") {
    number = "0300";
    number1 = "0301";
    number2 = "0302";
    number3 = "0303";
    number4 = "0304";
    number5 = "0305";
    number6 = "0306";
    number7 = "0307";
    number8 = "0308";
    number9 = "0309";
    number20 = "0320";
    number21 = "0321";
    number22 = "0322";
    number23 = "0323";
    number24 = "0324";
    number25 = "0325";
  }
  if (sim === "ufone") {
    number = "0330";
    number1 = "0331";
    number2 = "0332";
    number3 = "0333";
    number4 = "0334";
    number5 = "0335";
    number6 = "0336";
    number7 = "0337";
  }
  if (sim === "zong") {
    number = "0310";
    number1 = "0311";
    number2 = "0312";
    number3 = "0313";
    number4 = "0314";
    number5 = "0315";
  }
  if (sim === "tele") {
    number = "0340";
    number1 = "0341";
    number2 = "0342";
    number3 = "0343";
    number4 = "0344";
    number5 = "0345";
  }

  return (
    <div className="mb-11">
      <section className=" mb-11">
        <img src={image} alt="Loading" className="banner-size" />
        <div className="flex items-center justify-center mt-5 border border-white shadow-none rounded-lg ml-52 py-2 mr-28 text-white bg-gradient-to-br from-green-400 to-blue-800">
          <label className="text-lg mr-3" htmlFor="Serial Number">
            Select Company:
          </label>
          <select
            className="text-black mr-6 border rounded-xl cursor-pointer"
            id=""
            value={sim}
            onChange={(e) => setSim(e.target.value)}
          >
            <option value="jazz">Jazz/Warid</option>
            <option value="ufone">UFone</option>
            <option value="zong">Zong</option>
            <option value="tele">Telenor</option>
          </select>
          <label className="text-lg mr-3" htmlFor="Serial Number">
            Choose a Serial Number:
          </label>
          <select
            className="text-black mr-6 inline-flex border rounded-xl cursor-pointer"
            id=""
            value={sNumber}
            onChange={(e) => setSNumber(e.target.value)}
          >
            <option value={number}>{number}</option>
            <option value={number1}>{number1}</option>
            <option value={number2}>{number2}</option>
            <option value={number3}>{number3}</option>            
            <option value={number4}>{number4}</option>            
            <option value={number5}>{number5}</option>            
            <option value={number6}>{number6}</option>            
            <option value={number7}>{number7}</option>            
            <option value={number8}>{number8}</option>            
            <option value={number9}>{number9}</option>
            <option value={number20}>{number20}</option>
            <option value={number21}>{number21}</option>
            <option value={number22}>{number22}</option>
            <option value={number23}>{number23}</option>
            <option value={number24}>{number24}</option>
            <option value={number25}>{number25}</option>

          </select>
          <div className="flex items-center justify-center  ">
            <div className="flex items-center max-w-md mx-auto rounded-lg ">
              <div>
                <input
                  type="search"
                  className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                  placeholder="Search Number"
                  x-model="search"
                />
              </div>
              <div>
                <button className="flex items-center justify-center w-12 h-12 mr-4 ml-2 text-white rounded-r-lg bg-green-500 ">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
          <input type="checkbox" class=" checked:bg-blue-500 " />
                <label className="italic">Enable Golden Numbers</label>
          </div>
        </div>
        <div>
          <SimCard sNumber={sNumber} />
        </div>
      </section>
    </div>
  );
}
