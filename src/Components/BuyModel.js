import React, { useState } from "react";
import { Link } from "react-router-dom";

function BuyModel({ setModalOn, setChoice }) {
  const val = { email: "", password: "", remember: false };
  const [formValue, setformValue] = useState(val);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValue));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      alert("Email is Required");
    }
    if (!values.password) {
      alert("Password is Required");
    }
    return errors;
  };
  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50 ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">
          <div className="flex text-lg text-zinc-600 mb-10">Book Now</div>
          <div>
            <form action="" className="space-x-6" onSubmit={onSubmit}>
              <div>
                <label className="text-sm font-bold text-green-500 block">
                  Number
                </label>
                <input
                  value={formValue.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full p-2 border border-green-500 rounded-2xl mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-green-500 block">
                  Password
                </label>
                <input
                  value={formValue.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full p-2 border border-green-500 rounded-2xl mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    value={false}
                    onChange={handleChange}
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-blue-500 rounded-2xl"
                  />

                  <label htmlFor="" className="ml-2 text-sm text-black">
                    Remember me
                  </label>
                </div>
              </div>
              <div>
                <Link
                  to="/forget"
                  className="font-medium italic text-sm text-black"
                >
                  Forget Password
                </Link>
              </div>
              <div>
                <button className="w-full py-2 px-2 bg-green-600 hover:bg-green-700 rounded-2xl text-white text-sml  ">
                  Login
                </button>
              </div>
              <div className="text-center">
                <label>Not a member?</label>
                <Link
                  to="/signup"
                  className="font-medium text-sm text-green-600"
                >
                  Signup
                </Link>
              </div>
            </form>
          </div>
          <div className="flex">
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 text-white bg-blue-500 "
            >
              Cancel
            </button>
            <button
              onClick={handleOKClick}
              className="rounded px-4 py-2 ml-4 text-white bg-green-400 "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyModel;
