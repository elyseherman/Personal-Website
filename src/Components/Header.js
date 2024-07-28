import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='highlight'>Elyse Herman</h1>
                <h2 className='highlight'>CS @ McGill University –– June 2025</h2>
                <p className='normal'>Junior Software Developer specializing in Web and App Development.</p>
            </div>
        );
    }
}

export default Header;