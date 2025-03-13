import React from 'react'
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .7 } }}
            className='w-full flex flex-col lgl:flex-row lgl:gap-20'>
            <div className='w-full lgl:w-1/2'>
                <div className='py-9 font-titleFont flex flex-col gap-3'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Technical Skills</h2>
                </div>
                <div className='mt-4 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Java</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[95%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>95%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React.js</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[80%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Microsoft.Net</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[50%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>50%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Spring Boot</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[70%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>70%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
            {/*Second Div*/}
            <div className='w-full lgl:w-1/2'>
                <div className='mt-6 lgl:mt-40 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Html/Css</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[95%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>95%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Hibarnate</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[65%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>65%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Mysql</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[100%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Figma</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[60%] h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>60%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills