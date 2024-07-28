import React, { Component } from 'react';
import './Links.css'
import { FaLinkedin as LinkedIn, FaGithub as Github, FaGoodreads as Goodreads } from "react-icons/fa6";

class Links extends Component {
    render() {
        
        return (
            <div className='links'>
                <a href='https://github.com/elyseherman' target='_blank' rel='noopener noreferrer'>
                <Github className='icon'/>
                </a>
                <a href='https://www.linkedin.com/in/elyse-herman' target='_blank' rel="noopener noreferrer">
                <LinkedIn className='icon'/>
                </a>
                <a href='https://www.goodreads.com/user/show/179851521-elyse-herman' target='_blank' rel='noopener noreferrer'>
                <Goodreads className='icon' />
                </a>
            </div>
        );
    }
}

export default Links;