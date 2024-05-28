    import React from 'react'
    import Data from './Data'

    function Projects() {
        return (
            <>  
                <div className="mt-[5%] w-[50%] m-auto">
                    <h1 className='font-bold text-5xl mb-2 text-zinc-800'>Things I've made trying to put </h1>
                    <h1 className='font-bold text-5xl text-zinc-800 mb-5'> my dent in the universe.</h1>
                    <p className="w-[60%] font-base text-zinc-500 mb-5">I've worked on some of little projects
                        over the years but these are the ones that I'm most proud of.
                    </p>
                    <Data />
                </div>
            </>
        )
    }

    export default Projects
