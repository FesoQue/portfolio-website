import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import RESUME from '../assets/tech-resume.pdf';
import { Home, About, Skills, Projects, Contacts, Download } from './Icons';

const DesktopNav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenu = () => {
    if (isClicked) {
      setIsClicked(false);
    }
  };
  return (
    <aside className='desktop-header'>
      <div className='dsk-ham-wrapper'>
        <button
          id='ham-menu'
          onClick={() => setIsClicked(!isClicked)}
          className={`hamburger hamburger--collapse ${
            isClicked ? 'is-active' : ''
          }`}
          aria-label='menu'
          aria-controls='navigation'
          type='button'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
      <div className='desktop-nav'>
        {/* row1 */}
        <div className='dsk-nav-row dsk-nav-row1 logo'>
          <h2>
            <Link to='/'>
              Q<span>.</span>
            </Link>
          </h2>
        </div>
        {/* row2 */}
        <div className='dsk-nav-row dsk-nav-row2'>
          <ul className={`dsk-nav-list ${isClicked ? 'nav-expand' : ''}`}>
            <li>
              <NavLink onClick={handleMenu} to='/' aria-label='Home'>
                <span className='dsk-nav-icon'>
                  <Home />
                </span>
                <span className='dsk-nav-text'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/about' aria-label='About'>
                <span className='dsk-nav-icon'>
                  <About />
                </span>
                <span className='dsk-nav-text'>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/skills' aria-label='Skills'>
                <span className='dsk-nav-icon'>
                  <Skills />
                </span>
                <span className='dsk-nav-text'>Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMenu}
                to='/projects'
                aria-label='Projects'
              >
                <span className='dsk-nav-icon'>
                  <Projects />
                </span>
                <span className='dsk-nav-text'>Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/contact' aria-label='Contact'>
                <span className='dsk-nav-icon'>
                  <Contacts />
                </span>
                <span className='dsk-nav-text'>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* row3 */}
        <div className='dsk-nav-row dsk-nav-row3'>
          <div className='dsk-resume'>
            <a
              href={RESUME}
              className='dsk-download-resume'
              download='adefeso-Qudus-Resume'
            >
              <span>
                <Download />
              </span>
              <span className='tooltip'>resume</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DesktopNav;
