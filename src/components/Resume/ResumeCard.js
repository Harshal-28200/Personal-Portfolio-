import React from 'react'

const ResumeCard = ({ title, stream, college, result, des }) => {
    return (
        <div className='w-full h-1/2 group flex'>
            <div className='w-7 lgl:w-10 h-[6px] bgOpacity mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                    <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
                </span>
            </div> 
            <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-4 lgl:gap-8 shadow-shadowOne'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                   <div>
                        <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300 pt-2'>{title}</h3>
                        <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{stream}</p>
                        <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{college}</p>
                   </div>
                   <div>
                        <p className='px-4 py-2  text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium'>{result}</p> 
                   </div>
                </div>
                <p className='text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>{des}</p>
            </div>
        </div>
    );
}

export default ResumeCard