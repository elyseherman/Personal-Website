import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import { FaArrowRight } from "react-icons/fa6";
import './Experience.css';
import PDF from '../Media/ElyseHermanResume.pdf';

class Experience extends Component {
    render() {
        return (
            <div>
                <ExperienceCard 
                yearsPresent='JUNE 2024 - PRESENT' 
                jobTitle='Software Developer · SUTO Inc.' 
                description='Developed an application that connects professional and amateur private chefs to clients using React Native and Javascript, improving performance and maintainability. Lead a team of software developers, increasing productivity and code quality through mentorship and collaboration. Managed the development pipeline and infrastructure for the application, ensuring efficient CI/CD processes and scalability.'
                tag1='React' tag2='JavaScript' tag3='HTML' tag4='CSS'
                />
                <a href='https://dream.ca/' target='_blank' rel='noopener noreferrer'>
                <ExperienceCard
                yearsPresent='MAY - AUG 2023'
                jobTitle='Software Implementation Intern · Dream Asset Management Corportation'
                description='Acquired expertise in new accounting software for coding files, optimizing internal processes and data management. Conducted comprehensive training sessions on new software for Ontario offices, enhancing operational efficiency and user proficiency. Developed new files with the latest software and maintained legacy files, ensuring seamless integration and data consistency across platforms.' 
                tag1={null} tag2={null} tag3={null} tag4={null}/>
                </a>
                <a href='https://girlswhocode.com/' target='_blank' rel='noopener noreferrer'>
                <ExperienceCard 
                yearsPresent='SEPT - DEC 2022'
                jobTitle='Learning Facilitator · Girls Who Code'
                description='Taught Python to female high school students, increasing their coding proficiency and confidence in programming. Demonstrated the importance of computer skills to female high school students, inspiring interest and engagement in technology careers. Highlighted the value of female coders in the industry, encouraging high school girls to pursue careers in computer science.'
                tag1='Python' tag2={null} tag3={null} tag4={null}/>
                </a>
                <a href={PDF} target='_blank' rel='noopener noreferrer'>
                    <p className='resume'>View Full Resume <span><FaArrowRight className='arrow'/></span></p>
                </a>
            </div>
        );
    }
}

export default Experience;