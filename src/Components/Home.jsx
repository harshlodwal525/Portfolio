import React from 'react'
import 'boxicons'
import { Link, NavLink } from 'react-router-dom'
import Cursor from './Cursor'
const Home = (e) => {
    return (
        <>
            <Cursor/>
            {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
            <div className="w-[50%]  mt-[8%] mb-[6%] flex flex-wrap items-center justify-center mx-auto boder ">
                <div className="w-full">
                    <span className='font-base text-3xl text-gray-300'> Hey, I'm Harsh.</span>
                    <div className="text-gray-100 mt-3 text-xl">
                        <p className='text-5xl font-bold  mb-3
                        bg-gradient-to-br  from-yellow-300 from-30% to-purple-500 to-90%
                        inline-block text-transparent bg-clip-text
                        '>Software & Data  Enthusiast.</p>
                        <p className='mb-3'>Based in India,</p>
                        <p className='mb-3'>I'm interested in  Java, Spring Boot, Spring Microsevices, Spring Security, JavaScript, React Js, Node Js, Python, Machine Learning, Deep Learning , Data Science.</p>
                        <p className='mb-3'>Currently working at Infosys.</p>
                    </div>
                    <div className='relative'>

                        <button className='px-4 py-2  gap-3 mt-10
                    hover:text-gray-100 
                    text-gray-400
                    text-base
                    border-2 
                    border-zinc-800 mr-4 rounded-md bg-zic-900
                    hover:border-purple-600
                    b-gradient-to-br from-gray-900 from-10%  to-black to-90%
                    cursor-none
                    hover:shadow-[0_20px_50px_#7e26d193]
                    bg-black-500
                    '> <a className='cursor-none' href="mailto:harshlodwal525@gmail.com">👋 Say hello</a></button>
                        <a href="/assets/Harsh_Lodwal_Resume.pdf" download>
                            <button className='px-4 py-[8px] mt-10 
                    text-gray-800 text-medium 
                    border-2 
                    border-yellow-600 
                    mr-4 rounded-md 
                    hover:shadw-md text-medium
                    rgb(253 224 71
                     hover:shadow-[0_20px_50px_rgba(253,_224,_71,_0.3)]
                    bg-yellow-500
                    hover:bg-yellow-400 cursor-none'>
                                <div className="flex items-center 
                        justify-center gap-2 font-medium ">Resume <box-icon name='download'
                                        type='solid' color='#09090b' ></box-icon></div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
