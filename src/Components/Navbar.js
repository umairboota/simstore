import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className=" md:z-50 md:w-full text-green-600 md:shadow-2xl body-font">
      <div className=" border-gray-900 container md:mx-auto md:flex md:flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="md:flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </Link>
        <nav className="md:ml-auto font-serif md:flex md:flex-wrap ">
          <Link to="/" className="mr-5 hover:text-green-400">
            Home
          </Link>
          <Link to="/sims" className="mr-5 hover:text-green-400">
            Sims
            {/* <select name="" id=""></select> */}
          </Link>
          <Link to="/mobile" className="mr-5 hover:text-green-400">
            Mobile
          </Link>
          <Link to="/devices" className="mr-5 hover:text-green-400">
            Devices
          </Link>
          <button>
            <Link
              to="/login"
              className="hover:text-white font-[Poppins] py-1 px-4 rounded-lg border-2 text-xl border-green-600 md:ml-8  hover:bg-green-400 duration-500"
            >
              Login
            </Link>
          </button>
        </nav>
      </div>
      <div></div>
      <hr />
    </header>
  );
}
