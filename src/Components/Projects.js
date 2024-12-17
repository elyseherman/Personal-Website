import React, { Component } from 'react';
import './Projects.css'
import ProjectsCard from './ProjectsCard';
import ProjectsInProgressCard from './ProjectsInProgress';
import image1 from '../Media/elyseherman.com.png';
import image2 from '../Media/ZombieLand.png';
import image3 from '../Media/McBooking.png';

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <ProjectsInProgressCard projectTitle='WeekBite · Grocery Helper' description='An app that makes grocery shopping seamless and stress-free. Upload your favourite recipes, organzie your weekly meal plan, and generate your grocery list with all necessary ingredients and quantities.' tag1='React Native' tag2='JavaScript' tag3='HTML' tag4='CSS' />
                <a href="https://github.com/SimonjArts/mcbooking" target='_blank' rel='noopener noreferrer'>
                    <ProjectsCard projectTitle='McBooking' description='An appointment-booking platform designed for professors, TAs, and students at McGill University. The system streamlines the process of scheduling office hours, managing bookings, and improving communication between students and academic staff. Built with a focus on usability and efficiency, MCBooking features user authentication, session management, and a clean, intuitive interface to simplify academic scheduling.' tag1='PHP' tag2='HTML' tag3='CSS' tag4='JavaScript' src={image3} />
                </a>
                <ProjectsCard projectTitle='Personal Website' description='A digital portfolio that showcases my projects and experience as a software developer, as well as my personal highlights.' tag1='React' tag2='JavaScript' tag3='HTML' tag4='CSS' src={image1} />
                <a href='https://github.com/elyseherman/ZombieLand' target='_blank' rel='noopener noreferrer'>
                    <ProjectsCard projectTitle='ZombieLand · Pathfinder Game' description='A post-apocalyptic game where users must navigate different paths, avoid potential, and find the optimal route to stay alive. Watch out for zombies!' tag1='Java' tag2={null} tag3={null} tag4={null} src={image2} />
                </a>
            </div>
        );
    }
}

export default Projects;