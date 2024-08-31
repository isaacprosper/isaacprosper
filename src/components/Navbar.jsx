import React, { useState } from 'react'
import { BiSolidCctv } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function closeMenu() {
    setToggle(false);
  }

  function openMenu() {
    setToggle(true);
  }

  return (
    <>
      <div className='flex items-center justify-between bg-opacity-95 px-10 py-5 lg:flex-row fixed w-screen border-y-2 bg-orange-950 z-50'>
        <div>
          <a href="#" className='flex text-white font-mono text-2xl tracking-wider items-center '>
            <BiSolidCctv className='text-orange-600 outline-2 mr-3 outline-double text-5xl p-1 outline-gray-200 rounded-full '/>JERRY-MEDIA
          </a>
        </div>
        <div className='space-x-4'>
          <div className='ssm:hidden lg:block space-x-2 p-10 border px-1 py-1 rounded-full pr-10 pl-10 '>
            <a href="#" className='text-white hover:bg-black-950 hover:text-white hover:border rounded-full px-5 py-2 font-semibold'>
              Home
            </a>
            <a href="#" className='text-white hover:bg-black-950 hover:text-white hover:border rounded-full px-5 py-2 font-semibold'>
              About
            </a>
            <a href="#" className='text-white hover:bg-orange-950 hover:text-white hover:border rounded-full px-5 py-2 font-semibold'>
              Services
            </a>
            <a href="#" className='text-white hover:bg-black-950 hover:text-white hover:border rounded-full px-5 py-2 font-semibold'>
              Products
            </a>
            <NavLink to="/SignUp">
              <button className='bg-white font-semibold to-orange-950 px-10 py-2 my-3 rounded-full hover:bg-orange-950 hover:text-white hover:border'>
                Get in Touch
              </button>
            </NavLink>
          </div>

          <div className='ssm:block lg:hidden '>
            {
              toggle ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={30}
                  className='text-white cursor-pointer'
                />
              ) : (
                <HiMenuAlt1
                  onClick={openMenu}
                  size={30}
                  className='text-white'
                />
              )
            }
          </div>
        </div>
      </div>

      <div className={`border-y-2 ssm:block lg:hidden bg-orange-950 bg-opacity-95 fixed top-0 left-0 w-full z-40 transition-transform duration-300 ease-in-out ${toggle ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex flex-col items-center justify-center space-y-4 py-10 max-h-[80vh] overflow-auto'>
          <ul className='text-center'>
            <li className='text-white  text-2xl mb-4 cursor-pointer' onClick={closeMenu}>Home</li>
            <li className='text-white  text-2xl mb-4 cursor-pointer' onClick={closeMenu}>Home</li>
            <li className='text-white  text-2xl mb-4 cursor-pointer' onClick={closeMenu}>About</li>
            <li className='text-white text-2xl mb-4 cursor-pointer' onClick={closeMenu}>Services</li>
            <li className='text-white text-2xl mb-4 cursor-pointer' onClick={closeMenu}>Products</li>
            <NavLink to="/SignUp" onClick={closeMenu}>
              <li className='bg-white text-orange-950 font-semibold px-10 py-2 rounded-full hover:bg-orange-950 hover:text-white'>
               Get in Touch
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;
