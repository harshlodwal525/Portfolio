import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="w-1/2 mb-[1%]  m-auto mt-[3%] flex justify-between items-center">
        <div className="flex items-center gap-4 ">  
        <Link to='https://www.linkedin.com/in/harsh-lodwal-2a7477128/' className='transform transition-transform duration-200 ease-in-out hover:-translate-y-3 w-[30px] h-[40px] items-center flex justify-start'><box-icon  name='linkedin-square' type='logo' size='sm'></box-icon></Link>
        <Link to='https://github.com/harshlodwal525' className='transform transition-transform duration-200 ease-in-out hover:-translate-y-3 w-[30px] h-[40px] items-center flex justify-start'><box-icon name='github' type='logo' size='sm'></box-icon></Link>
        <Link to='https://www.instagram.com/_h.a.r.s.h_24_/' className='transform transition-transform duration-200 ease-in-out hover:-translate-y-3 w-[30px] h-[40px] items-center flex justify-start'><box-icon name='instagram-alt' type='logo' size='sm'></box-icon></Link>     
        </div>
        <div className="flex justify-center items-center"> <div className="font-medium text-zinc-500">Design and Developed </div><div className="text-zinc-500 font-medium">💛by Harsh</div></div>
      </div>
    </>
  )
}

export default Footer
