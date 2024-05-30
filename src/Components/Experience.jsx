import React from 'react'
import Cursor from './Cursor'


function Experience() {
  return (
    <>
      <div className="mt-[5%] w-[50%] m-auto"><h1 className='font-bold text-5xl mb-2
                    bg-gradient-to-br  from-yellow-300 from-30% to-purple-500 to-90%
                    inline-block text-transparent bg-clip-text pb-3
                    '>Things I've made trying to put </h1>
        <h1 className='font-bold text-5xl mb-5
                    bg-gradient-to-br  from-yellow-300 from-30% to-purple-500 to-90%
                    inline-block text-transparent bg-clip-text pb-5'
        > my dent in the universe.</h1>
      </div>
      <div className="w-1/2  mx-auto mt-[5%] flex p-4 text-gray-200 bg-gradient
        hover:shadow-xl transform transition-transform duration-200 ease-in-out  
        hover:-translate-y-3 rounded-md 
        bg-purple-400 bg-opacity-10
        ">
        <div className="w-1/3 h-70 flex justify-center ">Apr 2022 - Present</div>
        <div className="w-3/4 ">
          <h1 className='font-semibold text-purple-200'>Infosys Limited</h1>
          <p className='font-medium text-purple-200'>Software Engineer</p>
          <div className=" pr-3">
            <p className='font-base text-zinc-500'>Spearheaded the development of diverse Spring Boot technologies.
              Engaged in crafting Spring microservices and REST APIs.
              Orchestrated the creation of Docker files and Docker Compose for microservices.
              Formulated JUnit test cases for microservices.
              Assessed sprint stories and ensured their completeness through in-depth discussions
              with clients.
              Devised initial technical designs for intricate user stories.
              Evaluated developed code to ensure adherence to best programming.
            </p>
            <div className=" flex gap-4 mt-3 flex-wrap border-red-400">
              <span className=" flex justify-center items-center text-xs text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg"> Java </span>
              <span className=" flex justify-center items-center text-xs text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg text-center">Spring Boot  </span>
              <span className=" flex justify-center items-center text-xs text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg text-center">Spring Microservices  </span>
              <span className=" flex justify-center items-center text-xs text-purple-200 p-2  border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg"> Docker </span>
              <span className=" flex justify-center items-center text-xs text-purple-200 p-2  border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg"> Azure </span>
              <span className=" flex justify-center items-center text-xs text-purple-200 p-2  border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg"> AWS </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2  mx-auto mt-[5%] flex p-4 text-gray-200 bg-gradient
        hover:shadow-xl transform transition-transform duration-200 ease-in-out  
        hover:-translate-y-3 rounded-md 
        bg-purple-400 bg-opacity-10
        ">

        <div className="w-1/3 h-70 flex justify-center text-white">Aug 2021 - Mar2022</div>
        <div className="w-3/4 ">
          <h1 className='font-semibold text-purple-200'>Softude by Systematix Infotech Pvt Ltd</h1>
          <p className='font-medium text-purple-200'>Trainee Engineer </p>
          <div className=" pr-3">
            <p className='font-base text-zinc-500'>Engaged in the development of APIs for user stories.
              Conducted use case walk-throughs to grasp business understanding and functionalities.
              Engineered logic for proposed functionalities using Node.js.
              Programmed and deployed website features.
              Enhanced user interfaces for optimal performance.
              Tailored modules according to client requirements, enabling dynamic data listing and
              report management.
            </p>
            <div className=" flex gap-4 mt-3">
              <span className="flex justify-center items-center border text-xs text-purple-200 px-2 border-purple-800   bg-purple-800 bg-opacity-25 rounded-lg">Java Script</span>
              <span className=" flex justify-center items-center  text-xs p-3 text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg">React JS  </span>
              <span className=" flex justify-center items-center  text-xs p-3 text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg">Node JS  </span>
              <span className=" flex justify-center items-center  text-xs p-3 text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg">Html  </span>
              <span className=" flex justify-center items-center  text-xs p-3 text-purple-200 px-2 border-purple-800 border border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg">CSS  </span>
            </div>
          </div>
        </div>
      </div>

      <Cursor />
    </>
  )
}

export default Experience
