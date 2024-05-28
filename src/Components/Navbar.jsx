import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <>

      <nav className='w-[50%]  py-3  mt-5 mx-auto text-gray-600 flex justify-between items-center '>
        <div className="text-xl hover:text-black"><NavLink to="/" className="flex justify-center items-center gap-3 mr-3"><div className="w-10 h-10   bg-yellow-400 rounded-full"> <img src="/src/assets/harsh_main.jpg" className='rounded-full' alt="" /> </div> <span className='flex flex-col'>Harsh Lodwal</span></NavLink></div>
        <div className="flex items-center">
          <ul className='flex items-center  gap-3'>
            <li className='hover:bg-yellow-200 px-2 py-1 rounded-md hover:text-zinc-950'><NavLink to="/Projects">Projects</NavLink></li>
            <li className='hover:bg-yellow-200 px-2 py-1 rounded-md hover:text-zinc-950'><NavLink to="/experience">Experience</NavLink></li>
            <li className='hover:bg-yellow-200 px-2 py-1 rounded-md hover:text-zinc-950'><NavLink to="/About">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
