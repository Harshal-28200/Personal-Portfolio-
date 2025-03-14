import React from 'react'
import { BsGithub } from 'react-icons/bs';


const ProjectCard = ({ title, des, src }) => {
    return (
        <div className='w-full py-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
            <div className='px-2 lgl:px-0 w-full h-[90] overflow-hidden rounded-lg'>
                <img className='w-full h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="src" />
            </div>
            <div className=' ml-3 lgl:ml-0 w-full mt-5 flex flex-col gap-6'>
                <div className='px-2 xl:px-0'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-base uppercase text-designColor font-normal'>{title}</h3>
                        <div className='pr-3 lgl:pr-0 flex gap-2'>
                            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                                <BsGithub />
                            </span>
                        </div>  
                    </div>
                    <p className='text-sm lgl:tracking-wide mt-4 hover:text-gray-100 duration-300'>{des}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard
