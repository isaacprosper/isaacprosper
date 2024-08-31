import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-orange-950 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
                        <p className="mb-4">Subscribe to our newsletter to receive updates and offers:</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-s-full bg-white text-black focus:outline-none "
                            />
                            <button type="submit"className="p-2 bg-orange-700 hover:bg-orange-800  text-white rounded-r-full"     >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
                        <p>Email: jerrymediatech45@gmail.com</p>
                        <p>Phone: +1237064650390 / +234907900404</p>
                        <p>Address: 123 CCTV St, Tech City</p>
                        <div className="flex mt-4 justify-center md:justify-start">
                            <a href="https://www.facebook.com/jerrymediatech" className="text-white hover:text-orange-600 mr-4">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@jerrymediatech?_t=8owSEwcnbHx&_r=1" className="text-white hover:text-orange-600 mr-4">
                                <FaTiktok size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-orange-600 mr-4">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/jerrymediatech?igsh=MW51dzRjcGd6cXcz" className="text-white hover:text-orange-600">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center border-t border-gray-700 pt-6">
                    &copy; 2024 JERRY-MEDIA TECH. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
