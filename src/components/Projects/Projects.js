import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { Portfolio_P1 , Crime_RS_P2, WetherApi_P3} from '../../assets/index';

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center text-center'>
        <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
        />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14'>
          <ProjectCard 
            title="Advance Portfolio"
            des="An advanced portfolio built with React.js offers a dynamic, high-performance, and interactive way to showcase your skills, projects, and experience. It leverages modern UI/UX principles, reusable components, and efficient state management to create a seamless user experience.."
            src={Portfolio_P1}
          />
          <ProjectCard
            title="Crime Reporting System"
            des="The Crime Reporting System is a web-based application designed to streamline the process of reporting, managing, and tracking criminal incidents. Built using Spring Boot, Hibernate as ORM (Backend), JSP (frontend) and MySQL (Databases). The system provides a robust, scalable, and secure platform for citizens, law enforcement agencies, and administrators to collaborate effectively."
            src={Crime_RS_P2} 
          />
          <ProjectCard 
            title="Weather API System"
            des="A Weather API Project is a web-based application that fetches real-time weather data from an API (such as OpenWeatherMap, Weather API, or AccuWeather) and displays it to users.User-friendly Interface Built using HTML, CSS for a clean UI and also use JavaScript (Fetch API/AJAX) to retrieve and process weather data."
            src={WetherApi_P3} 
          />
        </div>
    </section>
  )
}

export default Projects