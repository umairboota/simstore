import React, { useState } from "react";
import loc from "../images/location.png";
import BuyModel from "./BuyModel";

export default function SimCard({ sNumber }) {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };
  return (
    <div>
      {modalOn && <BuyModel setModalOn={setModalOn} setChoice={setChoice} />}
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className=" p-4">
          <li>
            <div className="select-none flex flex-1 items-center duration-500 Form hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl ">
              <div className=" pl-1 mr-16 p-0">
                <div className="font-medium">
                  <div>
                    <h2 className="inline-flex">
                      Captain: Hassan
                      <img className="ml-32 w-6" src={loc} alt="" />
                      <label htmlFor="">Allama Iqbal Town</label>
                    </h2>
                    <br />
                    <div className="inline-flex">
                      <div className=" border-4 rounded-xl mr-4 mt-5">
                        {sNumber}-0000000
                        <button
                          onClick={clicked}
                          className="ml-2 text-sm rounded-3xl border-2 bg-green-800 text-white  hover:bg-green-400 duration-500"
                        >
                          Buy Now
                        </button>
                      </div>
                      <div className=" border-4 rounded-lg mr-4 mt-5">
                        {sNumber}-0000000
                        <button
                          onClick={clicked}
                          className="ml-2 text-sm rounded-3xl border-2 bg-green-800 text-white  hover:bg-green-400 duration-500"
                        >
                          Buy Now
                        </button>
                      </div>
                      <div className=" border-4 rounded-lg mr-4 mt-5">
                        {sNumber}-0000000
                        <button
                          onClick={clicked}
                          className="btn ml-2 text-sm rounded-3xl border-2 bg-green-800 text-white  hover:bg-green-400 duration-500"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>

                    {/* <h3 className="text-sm inline-flex ml-32 text-gray-500 font-serif ">
                      RS.1000
                    </h3> */}
                  </div>
                  {/* <div className="mt-8 text-sm font-serif ">
                    <h2>1000 on-net mints </h2>
                    <h2>300 offnet mints </h2>
                    <h2>5GB MB's </h2>
                    <h2>1000 SMS </h2>
                  </div> */}
                </div>
              </div>
              <br />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
