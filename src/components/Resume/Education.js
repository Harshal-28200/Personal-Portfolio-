import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.7}}}
            className='w-full flex flex-col lgl:flex-row gap-20'>
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2006 - 2025</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
                </div>
                <div className='mt-2 lgl:mt-5 w-full  lgl:w-[900px] lgl:h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Post Graduate Diploma - PGDAC"
                        stream="PGDAC - Advanced Computing"
                        college="MET IIT Mumbai (2024 - 2025)"
                        result="46.58 %"
                        des="My CDAC journey was a transformative experience, providing me with industry-oriented technical skills through rigorous coursework, hands-on projects, and collaborative learning. It helped me overcome challenges, master in new technologies, and prepare for a successful IT career."
                    />
                    <ResumeCard
                        title="Bachelor of Engineering (BE)"
                        stream="Mechanical Engineering"
                        college="Sandip Institute of Engineering Management (2019 - 2022)"
                        result="83.48 %"
                        des="During my BE,I gained a deep understanding of core engineering concepts, design principles, and manufacturing processes. The journey enhanced my problem-solving skills, technical expertise, and ability to apply theoretical knowledge to real-world challenges."
                    />
                    <ResumeCard
                        title="Diploma"
                        stream="Mechanical Engineering"
                        college="Matoshri Asarabai polytechnic, Eklahare (2016 - 2019)"
                        result="76.18 %"
                        des="In Diploma provided me with a strong technical foundation, hands-on experience, and practical knowledge of mechanical systems. It enhanced my problem-solving skills and prepared me for higher studies and industry challenges."
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Education