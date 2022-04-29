import React from "react";
// import Cards from "./Cards";
// import log from "../images/jazz.jpg";
import banner from "../images/phonebanner.png";


export default function Mobile() {
    
  return (
    <div>
      <div className="mb-11">
        <section className=" mb-11">
          <img src={banner} alt="Loading..." className="banner-size" />
          <div className="flex items-center justify-center mt-5 border border-white shadow-none rounded-lg ml-52 py-2 mr-28 text-white bg-gradient-to-br from-green-400 to-blue-800">
            <label className="text-lg mr-3" htmlFor="Serial Number">
              Select Company:
            </label>
            <select
              className="text-black text-center mr-6 border rounded-xl cursor-pointer"
              id=""
            //   value={sim}
            //   onChange={(e) => setSim(e.target.value)}
            >
              <option value="jazz">Jazz</option>
              <option value="ufone">UFone</option>
              <option value="zong">Zong</option>
              <option value="tele">Telenor</option>
            </select>
            <label className="text-lg mr-3" htmlFor="Serial Number">
              Choose Phone Type:
            </label>
            <select
              className="text-black text-center mr-6 inline-flex border rounded-xl cursor-pointer"
              id=""
            //   value={sNumber}
            //   onChange={(e) => setSNumber(e.target.value)}
            >
              <option value=" ">Type </option>
              <option value="Symbian ">Symbian </option>
              <option value="Android ">Android</option>
            </select>
            <div className="flex items-center justify-center  ">
              <div className="flex items-center max-w-md mx-auto rounded-lg ">
                <div>
                  <input
                    type="search"
                    className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                    placeholder="Search Phone Model"
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
          </div>
        </section>
      </div>
      {/* <span>
        <div className="flex-container ">
          <Cards className="flex-items" image={log} title="Vision-22" />
          <Cards className="flex-items" image={log} title="Vision-23" />
          <Cards className="flex-items" image={log} title="Vision-24" /> <br />
          <Cards className="flex-items" image={log} title="Vision-23" /> 
          <Cards image={log} title="Vision-22" />
        </div>
      </span> */}
    </div>
  );
}
