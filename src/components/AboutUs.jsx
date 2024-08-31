import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import securityCameras from '../assets/img/securityCameras.jpg'

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-white">
      <div className="relative flex flex-col lg:flex-row bg-orange-950 w-[90%] sm:w-[80%] lg:w-[80%] shadow-xl rounded-lg overflow-hidden">
        {}
        <div className="w-full lg:w-[40%] p-4">
          <img
            src={securityCameras}
            alt="Security Cameras"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {}
        <div className="w-full lg:w-[60%] flex flex-col justify-center p-6 lg:p-10  bg-gray-200">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <hr className='w-10 border-black' /> 
            About Us 
            <hr className='w-10 border-black'/>
          </h2>
          <h1 className="text-2xl font-bold text-black mb-4 leading-tight">
            We Provide Service With Over 5 Years Experience
          </h1>
          <p className="text-base text-black mb-4">
            Jerry Tech Media is a leading provider of 
            cutting-edge CCTV solutions, dedicated to 
            ensuring the safety and security of your home,
            business, or property. With years of experience
            in the industry, we specialize in delivering high-quality
            surveillance systems that are tailored to meet the unique needs of our clients.
          </p>
          <button className="mt-8 bg-orange-800 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex gap-2 items-center w-full lg:w-fit justify-center lg:justify-start">
            Read More <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
