import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import RESUME from '../assets/tech-resume.pdf';
import { Home, About, Skills, Projects, Contacts, Download } from './Icons';

const MobileNav = () => {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const checkScroll = () => {
    const currentScrollPos = window.pageYOffset;
    /*
     setVisible(currentScrollPos > prevScrollPos);*/
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className='mobile-header'>
      <nav className='header-row-1'>
        <div className='row-1-wrapper container'>
          <div className={`${visible ? 'logo' : 'logo dev'}`}>
            <Link to='/' className='home-link1'>
              <h2>
                Q<span>.</span>
              </h2>
            </Link>
            <Link to='/' className='home-link2'>
              <p>
                That Dev <br /> Guy
              </p>
            </Link>
          </div>

          <div className='resume'>
            <a
              href={RESUME}
              className='download-resume'
              download='adefeso-Qudus-Resume'
              aria-label='resume'
            >
              <span title='resume'>
                <Download />
              </span>
              resume
            </a>
          </div>
        </div>
      </nav>
      <nav className={`header-row-2 ${visible ? '' : 'hide'}`}>
        <div className='row-2-wrapper container'>
          <div className='nav-menu-list'>
            <NavLink to='/' className='menu-item' aria-label='home'>
              <Home />
              <span className='label one'>HOME</span>
            </NavLink>
            <NavLink to='/about' className='menu-item' aria-label='about'>
              <About />
              <span className='label two'>ABOUT</span>
            </NavLink>
            <NavLink to='/skills' className='menu-item' aria-label='skills'>
              <Skills />
              <span className='label three'>SKILLS</span>
            </NavLink>

            <NavLink to='/projects' className='menu-item' aria-label='projects'>
              <Projects />
              <span className='label four'>WORK</span>
            </NavLink>

            <NavLink to='/contact' className='menu-item' aria-label='contact'>
              <Contacts />
              <span className='label five'>CONTACT</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
