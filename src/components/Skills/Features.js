import React from 'react'
import Title from '../layouts/Title';
import Card from './Card';
import { FaWindows, FaDatabase } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";

const Features = () => {
    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="Features" des="What I Do"></Title>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
                <Card 
                    title="Web App Development"
                    des="I am a web developer passionate about building modern, scalable, and high-performance web applications. With expertise in both Frontend and Backend development."
                    icon={<FaWindows/>}
                    />
                <Card 
                    title="Database Management"
                    des="I specialize in designing, developing, and optimizing databases to ensure efficient data storage and retrieval, Structuring scalable and efficient databases using MySQL and MongoDB ensuring optimal performance and data integrity."
                    icon={<FaDatabase/>}
                />
                <Card 
                    title="UI/UX Design"
                    des="I specialize in crafting intuitive, user-friendly, and visually engaging digital experiences that enhance usability and drive user engagement. My approach combines design thinking, user research, and modern design tools like Figma to create seamless interfaces."
                    icon={<AiOutlineAntDesign/>}
                />
            </div>
        </section>
    );
}

export default Features
