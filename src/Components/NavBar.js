import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: null
        };
        this.observer = null;
    }

    componentDidMount() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshhold: 1
        }

        this.observer = new IntersectionObserver(this.handleIntersection, options);

        setTimeout(() => {
            if (this.props.sectionsRef && this.props.sectionsRef.current) {
                const sections = this.props.sectionsRef.current.querySelectorAll('section');

                sections.forEach(section => {
                    this.observer.observe(section);
                });
            }
        }, 100);
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.setState({ activeItem: entry.target.id });
            }
        });
    };

    setThreshhold = (sectionId) => {
        if (sectionId === 'about') {
            return 1;
        }
        else if (sectionId === 'experience') {
            return 0.6;
        }
        else if (sectionId === 'projects') {
            return 1;
        }
    }

    handleItemClick = (item, e) => {
        e.stopPropagation(); // Prevent the event from bubbling up
        this.setState({ activeItem: item });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <nav>
                <ul>
                    <li>
                        <Link to='#right-component' smooth style={{ textDecoration: 'none' }} onClick={(e) => this.handleItemClick('about', e)}>
                            <p className={activeItem === 'about' ? 'active' : ''}>About</p>
                        </Link>
                    </li>
                    <li  >
                        <Link to='#experience' smooth style={{ textDecoration: 'none' }} onClick={(e) => this.handleItemClick('experience', e)}>
                            <p className={activeItem === 'experience' ? 'active' : ''}>Experience</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='#projects' smooth style={{ textDecoration: 'none' }} onClick={(e) => this.handleItemClick('projects', e)}>
                            <p className={activeItem === 'projects' ? 'active' : ''}>Projects</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;