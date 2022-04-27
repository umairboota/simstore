import React from "react";

export default function SimCard({ sNumber }) {
  return (
    <div>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <li className="flex flex-row">
            <div className="select-none flex flex-1 items-center duration-500 ease-in-out transition-shadow Form hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl ">
              <div className=" pl-1 mr-16">
                <div className="font-medium">
                  <div className="flex">
                    <h2>
                      {sNumber}-0000000
                      <i className="text-green-600 font-serif"> 25% OFF </i>
                    </h2>
                    <h3 className="text-sm inline-flex ml-32 text-gray-500 font-serif ">
                      RS.1000
                    </h3>
                  </div>
                  <div className="mt-8 text-sm font-serif ">
                    <h2>1000 on-net mints </h2>
                    <h2>300 offnet mints </h2>
                    <h2>5GB MB's </h2>
                    <h2>1000 SMS </h2>
                  </div>
                </div>
              </div><br />
              <button className="hover:text-white mt-16 ml-32 font-[Poppins] py-1 px-4 rounded-lg border-2 text-xl border-green-600 md:ml-8  hover:bg-green-400 duration-500">
                Buy Now
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
