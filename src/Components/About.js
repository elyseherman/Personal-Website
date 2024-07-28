import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <p><span className='highlight' style={{fontSize:'1.2rem'}}>Hi! I'm Elyse</span><span className='normal'>, a Computer Science student at McGill University specializing in web and app development. I'm passionate about learning new skills and am always eager for new challenges!</span></p>

                <p><span className='normal'>Recently, I've started </span><span className='highlight' >SUTO, a female-owned startup</span><span className='normal'> designed to help you find a private chef for your events. SUTO connects clients with private chefs of varying skill levels, providing opportunities for amateur chefs to gain professional experience. </span></p>

                <p className='normal'>When I'm not behind my computer working on my latest project, you can find me on a run, in the kitchen trying new recipes, or on a plane to my next adventure!</p>
            </div>
        );
    }
}

export default About;