import React from 'react'
import { Link } from 'react-router-dom'
import Cursor from './Cursor'
const Footer = () => {
  return (
    <>
      <div className="w-1/2 mb-[1%]  m-auto mt-[3%] flex justify-between items-center ">
        <div className="flex items-center gap-4 ">
          <Link to='https://www.linkedin.com/in/harsh-lodwal-2a7477128/' className='transform transition-transform duration-200 ease-in-out hover:-translate-y-3 w-[30px] h-[40px] items-center flex justify-start cursor-none'><box-icon name='linkedin-square' color='#ffff' type='logo' size='sm'></box-icon></Link>
          <Link to='https://github.com/harshlodwal525' className='transform transition-transform duration-200 ease-in-out hover:-translate-y-3 w-[30px] h-[40px] items-center flex justify-start cursor-none'><box-icon name='github' type='logo' color='#ffff' size='sm'></box-icon></Link>
          <Link to='https://www.instagram.com/_h.a.r.s.h_24_/' className='transform transition-transform duration-200 ease-in-out hover:-translate-y-3 w-[30px] h-[40px] items-center flex justify-start cursor-none'><box-icon name='instagram-alt' type='logo' color='#ffff' size='sm'></box-icon></Link>
        </div>
        <div className="flex justify-center items-center font-medium text-gray-400"> Design and Developed 💛 by Harsh</div>
      </div>
      <Cursor/>
    </>
  )
}

export default Footer
