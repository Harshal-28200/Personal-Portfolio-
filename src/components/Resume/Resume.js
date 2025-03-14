import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Certification from './Certification';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [SkillsData, setSkillsData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [certificationData, setCertificationData] = useState(false);
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center text-center'>
                <Title
                    title="1 YEAR OF EXPERIENCE"
                    des="My Resume"
                />
            </div>
            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li
                        onClick={() => setEducationData(true)
                            & setSkillsData(false)
                            & setExperienceData(false)
                            & setCertificationData(false)
                        }
                        className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Education</li>
                    <li 
                    onClick={() => setEducationData(false)
                        & setSkillsData(true)
                        & setExperienceData(false)
                        & setCertificationData(false)
                    } 
                    className={`${SkillsData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>
                    <li 
                    onClick={() => setEducationData(false)
                        & setSkillsData(false)
                        & setExperienceData(true)
                        & setCertificationData(false)
                    }
                    className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Experience</li>
                    <li 
                    onClick={() => setEducationData(false)
                        & setSkillsData(false)
                        & setExperienceData(false)
                        & setCertificationData(true)
                    }
                    className={`${certificationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Certification</li>
                </ul>
            </div>
            {educationData && <Education />}
            {SkillsData && <Skills />}
            {experienceData && <Experience />}
            {certificationData && <Certification />}
        </section>
    );
}

export default Resume