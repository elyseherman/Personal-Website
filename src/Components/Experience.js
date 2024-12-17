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
                    jobTitle='Founder · SUTO Inc.'
                    description='Leading the development of a private chef booking app with a cross-functional team, resulting in a functional prototype within 6 months, currently preparing for launch. Designing and implementing an intuitive UI/UX, resulting in a user-friendly interface optimized for private chef bookings. Collaborating with developers to plan backend features that will support secure transactions and client-chef interactions,laying the groundwork for a scalable and efficient system expected to handle 100+ transactions per day.'
                    tag1={null} tag2={null} tag3={null} tag4={null}
                />
                <a href='https://lenovo.com/' target='_blank' rel='noopener noreferrer'>
                    <ExperienceCard
                        yearsPresent='SEP 2024'
                        jobTitle='Software Solutions Intern · Lenovo'
                        description='Developed Python scripts and Power BI processes aimed at automating business workflows and reducing manual report configurations across Sales. Evaluated software solutions for the HR department’s organization chart configurations, achieving a 50% improvement in resource management efficiency and reducing update time from 8 hours to 3 hours. Analyzed workflows across Sales, HR, Finance, and Marketing departments, gaining a strong understanding of organizational operations and decision-making.'
                        tag1={null} tag2={null} tag3={null} tag4={null} />
                </a>
                <a href='https://dream.ca/' target='_blank' rel='noopener noreferrer'>
                    <ExperienceCard
                        yearsPresent='MAY - AUG 2023'
                        jobTitle='Software Implementation Intern · Dream Asset Management Corportation'
                        description='Acquired expertise in new accounting software for coding files, optimizing internal processes and data management. Conducted comprehensive training sessions on new software for Ontario offices, enhancing operational efficiency and user proficiency. Developed new files with the latest software and maintained legacy files, ensuring seamless integration and data consistency across platforms.'
                        tag1={null} tag2={null} tag3={null} tag4={null} />
                </a>
                <a href='https://girlswhocode.com/' target='_blank' rel='noopener noreferrer'>
                    <ExperienceCard
                        yearsPresent='SEPT - DEC 2022'
                        jobTitle='Learning Facilitator · Girls Who Code'
                        description='Taught Python to female high school students, increasing their coding proficiency and confidence in programming. Demonstrated the importance of computer skills to female high school students, inspiring interest and engagement in technology careers. Highlighted the value of female coders in the industry, encouraging high school girls to pursue careers in computer science.'
                        tag1='Python' tag2={null} tag3={null} tag4={null} />
                </a>
                <a href={PDF} target='_blank' rel='noopener noreferrer'>
                    <p className='resume'>View Full Resume <span><FaArrowRight className='arrow' /></span></p>
                </a>
            </div>
        );
    }
}

export default Experience;
