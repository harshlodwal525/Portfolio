import React from 'react'
import { NavLink } from 'react-router-dom'
import Cursor from './Cursor'



const Navbar = () => {
  return (
    <>
      <Cursor/>
      <nav className='w-[50%]  py-2  mt-5 mx-auto text-gray-400 accent-orange-500 flex justify-between items-center '>
        <div className="text-xl "><NavLink to="/" className="flex justify-center items-center gap-3 mr-3">
          <div className="w-10 h-10   bg-yellow-400 rounded-full"> <img src="/assets/harsh_main.jpg" className='rounded-full cursor-none' alt="" /> 
          </div><span className='flex flex-col hover:text-white cursor-none'>Harsh Lodwal</span></NavLink></div>
        <div className="flex items-center">
          <ul className='flex items-center  gap-4'>
            <li className='hover:text-white border border-black hover:boder hover:border-purple-500 hover:border hover:shadow-[0_20px_50px_#7e26d193] px-2 py-1 rounded-md '><NavLink className='cursor-none' to="/Projects">Projects</NavLink></li>
            <li className='hover:text-white border border-black hover:boder hover:border-purple-500 hover:border hover:shadow-[0_20px_50px_#7e26d193] px-2 py-1 rounded-md '><NavLink className='cursor-none' to="/experience">Experience</NavLink></li>
            <li className='hover:text-white border border-black hover:boder hover:border-purple-500 hover:border hover:shadow-[0_20px_50px_#7e26d193] px-2 py-1 rounded-md '><NavLink className='cursor-none' to="/About">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
