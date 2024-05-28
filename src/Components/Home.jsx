import React from 'react'
import 'boxicons'
import { Link, NavLink } from 'react-router-dom'
// import Mouse from './Mouse'
// import tailwindConfig from '../../tailwind.config'
// import {Harsh_Lodwal_Resume} from '../../src/assets/Harsh_Lodwal_Resume.pdf'
const Home = (e) => {
    return (
        <>  
            
            <div className="w-[50%]  mt-[8%] mb-[6%] flex flex-wrap items-center justify-center mx-auto ">
                <div className="w-full">
                    <span className='text-gray-900 text-3xl font-base '>
                    </span><span className='font-base text-3xl'> Hey, I'm Harsh.</span>
                    <div className="text-gray-900 mt-3 text-xl">
                        <p className='text-5xl font-bold text-zinc-950 mb-3'>Software & Data  Enthusiast.</p>
                        <p className='mb-3'>Based in India,</p>
                        <p className='mb-3'>I'm interested in  Java, Spring Boot, Spring Microsevices, Spring Security, JavaScript, React Js, Node Js, Python, Machine Learning, Deep Learning , Data Science.</p>
                        <p className='mb-3'>Currently working at Infosys.</p>
                    </div>

                    <button className='px-4 py-2  gap-3 mt-10
                    text-gray-100 text-base 
                    bg-zinc-950 mr-4 rounded-md 
                    hover:bg-zinc-800'> <a href="mailto:harshlodwal525@gmail.com">👋 Say hello</a></button>
                    
                    <a href="src/assets/Harsh_Lodwal_Resume.pdf" download>
                    <button className='px-4 py-[6px] mt-10 
                    text-zinc-950 text-medium border-2 
                    border-zinc-950 mr-4 rounded-md 
                    hover:shadow-md text-medium'  >
                        <div className="flex items-center 
                        justify-center gap-2 font-medium 
                        text-zinc-950">Resume <box-icon name='download' 
                        type='solid' color='#09090b' ></box-icon></div> </button></a>
                </div>
            </div>
            
        </>
    )
}

export default Home
