import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BiSolidCctv } from 'react-icons/bi'

const SignUp = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/userinfo");
  };

  return (
    <div className="min-h-screen bg-orange-950 text-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side (Image and Info) */}
        <div className="w-full md:w-1/2 bg-orange-950 flex flex-col justify-center items-center p-8">
          <Link to="/" className="text-3xl font-bold text-white mb-4 flex">
          <BiSolidCctv className='text-orange-600 outline-2 mr-3 outline-double text-5xl p-1 outline-gray-200 rounded-full '/>
          JERRY-MEDIA<span className="text-primary">TECH</span>
          </Link>
          <p className="text-primary text-center mb-6">
            Your number one budgeting application. Create an account and let's get started...
          </p>
          <img
            src="https://img.freepik.com/free-photo/free-trial-storage-member-concept_53876-119992.jpg?t=st=1723548410~exp=1723552010~hmac=f39a2fbac0803138063b723e0363f97bbffb7797e8dfe21c4f8842a78f94d9d3&w=740"
            alt="Sign Up"
            className="w-3/4 max-w-sm rounded-full object-cover"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-16 bg-white text-black">
          <div className="mb-6">
            <p className="text-secondary text-xl">Get Started</p>
            <p className="font-bold text-2xl mt-2">
              Sign Up with JERRY-MEDIA TECH
            </p>
          </div>
          <form className="space-y-4">
            <div className="relative">
              <label className="text-gray-700">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey text-black"
                required
              />
              <span className="absolute right-4 top-8 text-purple-6">
                {/* Icon */}
              </span>
            </div>
            <div className="relative">
              <label className="text-gray-700">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey text-black"
                required
              />
              <span className="absolute right-4 top-8 text-gray-500">
                {/* Icon */}
              </span>
            </div>
            <div className="relative">
              <label className="text-gray-700">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type={passwordHidden ? "password" : "text"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey text-black"
                required
              />
              <span
                className="absolute text-gray-500 right-4 top-8 cursor-pointer"
                onClick={() => setPasswordHidden(!passwordHidden)}
              >
                {/* Toggle Password Visibility Icon */}
              </span>
            </div>
            <div className="relative">
              <label className="text-gray-700">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <input
                type={confirmPassword ? "password" : "text"}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-appGrey text-black"
                required
              />
              <span
                className="absolute text-gray-500 right-4 top-8 cursor-pointer"
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                {/* Toggle Confirm Password Visibility Icon */}
              </span>
            </div>

            <button
              type="button"
              className="w-full bg-orange-950 text-white py-3 rounded-lg mt-4 font-semibold hover:bg-orange-900 transition-colors"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <button className="w-full border border-gray-400 text-gray-800 py-3 rounded-lg mt-3 font-semibold hover:bg-gray-100 transition-colors">
              <a href="">Sign In with Google</a>
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <NavLink to="/login" className="text-primary hover:underline">
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
