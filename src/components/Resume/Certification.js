import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard';

const Certification = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .7 } }}
            className="w-full py-6 font-titleFont flex flex-col lgl:flex-row lgl:gap-10">
            <div>
                <div className="py-8 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">technical</p>
                    <h2 className="text-3xl lgl:text-4xl font-bold">Course Certifications</h2>
                </div>
                <div>
                    <div className='lgl:mt-5 w-full lgl:h-[450px] xl:h-[300px] border-l-[6px] border-black border-opacity-30 flex'>
                        <div className="lgl:mt-0 h-full lgl:h-[900px] xl:w-[610px] xl:h-[610px] flex flex-col gap-10">
                            <ResumeCard
                                title="Web Design & Development Programing."
                                stream="At Sparhasoft Technologies."
                                result="Nashik"
                                college="Sep 2022 - Mar 2023"
                                des="My 3-month Web Design & Development course provided me with essential skills in front-end technologies. Through hands-on projects, I gained expertise in building responsive websites, improving UI/UX, and understanding modern web development practices."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className=' lgl:mt-40 w-full lgl:h-[450px] xl:h-[300px] border-l-[6px] border-black border-opacity-30 flex flex-col lgl:flex-row'>
                    <div className="mt-10 lgl:mt-0 h-full lgl:h-[900px] xl:w-full xl:h-[610px] flex flex-col gap-10">
                        <ResumeCard
                            title="Preparatory Course for Entrance Exam"
                            stream="At Sunbeam Infotech Pvt.Ltd.,Pune"
                            result="Pune"
                            college="Mar 2024 - May 2024"
                            des="My 2-month Preparatory Course for the Entrance Exam was an intensive learning experience, strengthening my fundamentals regarding some programing language and Technical concept and exam strategies. It helped me build confidence and perform effectively in the competitive exam.."
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Certification