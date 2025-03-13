import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard';
const Experience = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .7 } }}
            className="py-5 font-titleFont flex flex-col lgl:flex-row gap-10">
            <div>
                <div className='py-4 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2022 - 2024</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-10 lgl:mt-5 w-full h-[290px] lgl:h-[80%] border-l-[6px] border-black border-opacity-30 flex'>
                    <div className='w-full h-full bg-bodyColor gap-5 justify-start'>
                        <div className='lgl:h-[250px]'>
                            <div className='mt-0 lgl:w-[70%] lgl:h-[600px] justify-start'>
                                <ResumeCard
                                    title="Front-End Developer"
                                    stream="ABS TECHNOSOFT."
                                    college="(Mar 2023 - Feb 2024)"
                                    result="Nashik"
                                    des="One year of experience as a Front-end developer, where worked on designing, developing, and maintaining websites and web applications.During this time, I collaborated with teams to implement user-friendly designs"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Experience