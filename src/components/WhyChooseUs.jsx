import React from 'react';
import menuImg from '../assets/img/menuImg.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const WhyChooseUs = () => {
  return (
    <div className="bg-orange-950 flex justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg w-[90%] sm:w-[80%] lg:w-[70%]">
        <div className="w-full lg:w-[40%] flex items-center justify-center p-4">
          <img
            src={menuImg}
            alt="CCTV Camera"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-start p-6 lg:p-12">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <hr className='w-16 border-black '/> Why Choose Us
            <hr className='w-16 border-black'/>
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">
              <svg className="w-6 h-6 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
              Professional Employees
            </li>
            <li className="flex items-center text-lg">
              <svg className="w-6 h-6 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
              Quality Products
            </li>
            <li className="flex items-center text-lg">
              <svg className="w-6 h-6 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
              Free Consultations
            </li>
            <li className="flex items-center text-lg">
              <svg className="w-6 h-6 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
              Free Installations
            </li>
          </ul>
          <button className="mt-8 bg-orange-800 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex gap-2 items-center w-full lg:w-fit justify-center lg:justify-start">
            Contact Us <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
