import React from 'react'
import heroImg from '../assets/img/heroImg.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';

const Hero = () => {
  return (
   <section className='flex justify-around items-center pt-32 p-11 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
    <div className='lg:w-1/2 ssm:w-fit animate-slide-in'>
    <p className='text-3xl font-bold mb-5 text-orange-600'>Welcome to</p>
    <h1 className='text-5xl animate-bounce-in'>JERRY-MEDIA TECH</h1>
     <hr />
     <p className='mt-8 text-slate-300 font-sans animate-fade-in'>
       At JERRY-MEDIA TECH, 
       we are dedicated to providing top-quality CCTV camera systems to meet
       all your security and surveillance needs. Our commitment to excellence
       is reflected in our wide range of products, designed to offer 
       comprehensive security solutions for both residential and commercial properties!
     </p>
     <button className='flex items-center bg-white font-semibold text-orange-950 px-10 py-2 my-5 rounded-full hover:bg-orange-950 hover:text-white hover:border'>
         Explore Our Services
         <AiOutlineCaretRight className='bg-orange-950 rounded-full text-white ml-4 p- animate-pulse' />
     </button>
    <div className="flex mt-4 justify-center md:justify-start">
      <a href="https://www.facebook.com/jerrymediatech" className="text-white hover:text-orange-600 mr-4">
        <FaFacebook size={24} className="hover:animate-bounce" />
      </a>
      <a href="https://www.tiktok.com/@jerrymediatech?_t=8owSEwcnbHx&_r=1" className="text-white hover:text-orange-600 mr-4">
        <FaTwitter size={24} className="hover:animate-bounce" />
      </a>
      <a href="#" className="text-white hover:text-orange-00 mr-4">
        <FaLinkedin size={24} className="hover:animate-bounce" />
      </a>
      <a href="https://www.instagram.com/jerrymediatech?igsh=MW51dzRjcGd6cXcz" className="text-white hover:text-orange-600">
        <FaInstagram size={24} className="hover:animate-bounce" />
      </a>
    </div>
    </div>
    <div className='lg:w-1/3 ssm:w-fit'>
         <img src={heroImg} alt="" width={150} height={150} className='w-full border-white hover:animate-spin-slow animate-zoom-in' />
    </div>
   </section>
  )
}

export default Hero
