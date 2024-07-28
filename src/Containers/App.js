import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Links from '../Components/Links';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.sectionsRef = React.createRef();
    this.state = {
      isMobile: window.innerWidth <= 1024 && window.innerWidth >= 320,
      hideHeader: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    if (this.state.isMobile) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.state.isMobile) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 1024 && window.innerWidth >= 320;
    this.setState({ isMobile });
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    const hideHeader = scrollTop > 50;
    this.setState({ hideHeader });
  }

  render() {
    const { isMobile, hideHeader } = this.state;

    return (
      <BrowserRouter>
        <div className='main-component'>
          {isMobile ? (
            <>
               <div className={`left-component ${hideHeader ? 'hide-header' : ''}`}>
               {!hideHeader && <Header className='header' />}
                <Links />
              </div>
              <div className='mobile-nav'>
                <NavBar className={hideHeader ? 'fixed' : 'sticky'} sectionsRef={this.sectionsRef} />
              </div>
              <div className='right-component' ref={this.sectionsRef} id='right-component'>
                <section id='about' className='section'>
                  <About />
                </section>
                <section id='experience'>
                  <Experience />
                </section>
                <section id='projects'>
                  <Projects />
                </section>
                <Footer />
              </div>
            </>
          ) : (
            <>
              <div className='left-component'>

                <Header className='header' />
                <NavBar sectionsRef={this.sectionsRef} />
                <Links />

              </div>
              <div className='right-component' ref={this.sectionsRef} id='right-component'>
                <section id='about'>
                  <About />
                </section>
                <section id='experience'>
                  <Experience />
                </section>
                <section id='projects'>
                  <Projects />
                </section>
                <Footer />
              </div>
            </>
          )}


        </div>
      </BrowserRouter>
    )
  }
}

export default App;
