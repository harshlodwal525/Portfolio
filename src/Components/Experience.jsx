import React from 'react'


function Experience() {
  return (
    <>  
   
      <div className="w-1/2  mx-auto mt-[5%] flex p-4 border bg-yellow-50 hover:shadow-xl transform transition-transform duration-200 ease-in-out  hover:-translate-y-3 rounded-md ">

        <div className="w-1/3 h-70 flex justify-center">Apr 2022 - Present</div>
        <div className="w-3/4 ">
          <h1 className='font-semibold'>Infosys Limited</h1>
          <p className='font-medium' >Software Engineer</p>
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
            <div className=" flex gap-4 mt-3 flex-wrap">
              <span className=" flex justify-center items-center border text-xs text-yellow-800 px-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg"> Java </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 px-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg text-center">Spring Boot  </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 px-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg text-center">Spring Microservices  </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg"> Docker </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg"> Azure </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg"> AWS </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-[3%] flex p-4 border bg-yellow-50 hover:shadow-xl rounded-md  transform transition-transform duration-200 ease-in-out hover:-translate-y-3">

        <div className="w-1/3 h-70 flex justify-center">Aug 2021 - Mar2022</div>
        <div className="w-3/4 ">
          <h1 className='font-semibold'>Softude by Systematix Infotech Pvt Ltd</h1>
          <p className='font-medium' >Trainee Engineer </p>
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
              <span className="flex justify-center items-center border text-xs text-yellow-800 p-2  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg">Java Script</span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-3  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg">React JS  </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-3  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg">Node JS  </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-3  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg">Html  </span>
              <span className=" flex justify-center items-center border text-xs text-yellow-800 p-3  border-yellow-600 bg-yellow-400 bg-opacity-25 rounded-lg">CSS  </span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Experience
