import React from 'react'
import { Link } from 'react-router-dom'

function Data() {
    return (
        <>  

       

            <div className="flex flex-wrap mt-[3%]">
                {data.map((d, index) => (
                    <div key={index} className="flex  flex-col w-1/2 py-3 pr-3 box-border ">
                        <div className="mr-3 mb-3 p-3 w-full h-[300px] bg-purple-400 bg-opacity-10 rounded-lg flex flex-col hover:shadow-xl transform transition-transform duration-200 ease-in-out hover:-translate-y-4">
                            <div className="m-3 w-[35px] h-[35px] bg-purple-400 flex justify-center items-center rounded-full"> <img src={d.img} alt="" /> </div>
                            <div className="m-3 font-semibold text-purple-200">{d.title} </div>
                            <div className="flex justify-between">
                            {d.techstack.map((n, idx) => (
                                <span key={idx} className="w-[30%] relative ml-3 flex justify-center items-center border text-xs text-purple-200  border-purple-800 border-opacity-30  bg-purple-800 bg-opacity-25 rounded-lg px-2 text-center">
                                    {n}
                                </span>
                            ))}
                            </div>
                            <div className="m-3 font-base text-zinc-400">{d.description}</div>
                            <div className="flex">
                                <div className="mt-3 w-[30px] flex justify-center items-center h-[30px]">
                                    <Link className='' to={d.github}>
                                        <box-icon name='link' color='rgb(168, 85, 247)' />
                                    </Link>
                                </div>
                                <div className="mt-3 ">
                                    <Link className='font-medium hover:text-purple-400 text-purple-500 cursor-none' to={d.github}>
                                        <p className=''>Github</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Data
const data = [
    {
        title: 'Multivariate Time Series Analysis on AQI',
        description: 'Application for forecasting the value of PM2.5',
        img: '/assets/pm.svg', 
        github: 'https://github.com/harshlodwal525/Multivariate-Time-Series-Analysis-on-Air-Quality-Index-.git',
        techstack:[ 'Deep Learning', 'Python', 'RNN', 'LSTM']
    },
    
    {
    title: 'Admin-Portal',
    description: 'A node js application with full data security and authentication',
    img: '/assets/stock.svg',
    github: 'https://github.com/harshlodwal525/Admin-Portal.git',
    techstack: ['Node Js', 'Express', 'MongoDB']
    },
    // {
    //     title: 'PM2.5predictor',
    //     description: 'PM2.5predictor on jupyter notebook',
    //     img: '/src/assets/pm.svg', 
    //     github: 'https://github.com/harshlodwal525/PM2.5predictor',
    //     techstack:[ 'machine learning']
    // },
    // {
    //     title: 'Stock-Sentiment-Analysis',
    //     description: 'Stock-Sentiment-Analysis on jupyter notebook',
    //     img: '/src/assets/stock.svg',
    //     github: 'https://github.com/GautamL17/Weather-App',
    //     techstack:[ 'machine learning']
    // },

    


]