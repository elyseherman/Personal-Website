import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p>
                    <span className='normal'>Coded in </span>
                    <span className='highlight'><a href='https://code.visualstudio.com/' target='_blank' rel='noopener noreferrer'>Visual Studio Code</a></span>
                    <span className='normal'> by yours truly. Built with JavaScript and </span>
                    <span className='highlight'><a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>React</a></span>
                    <span className='normal'>, deployed with </span>
                    <span className='highlight'>
                        <a href='https://render.com/' target='_blank' rel='noopener noreferrer'>Render</a></span>
                    <span className='normal'>. Design inspired by </span>
                    <span className='highlight'><a href='https://brittanychiang.com/' target='_blank' rel='noopener noreferrer'>Brittany Chiang</a></span>
                    <span className='normal'>.</span>
                </p>
            </div>
        );
    }
}

export default Footer;