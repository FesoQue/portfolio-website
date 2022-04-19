import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faLaptopCode,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  let name = 'Q.Dus';

  return (
    <header>
      <div className='header-row-1'>
        <div className='row-1-wrapper container'>
          <div className='logo'>
            <h2>{name}</h2>
          </div>

          <button
            onClick={() => setIsActive(!isActive)}
            className={`${
              isActive
                ? 'hamburger hamburger--collapse is-active'
                : 'hamburger hamburger--collapse'
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
      </div>
      <nav className={`${isActive ? 'header-row-2 show' : 'header-row-2'}`}>
        <div className='row-2-wrapper container'>
          <div className='nav-menu-list'>
            <div>
              <a href='' className='menu-item'>
                <FontAwesomeIcon icon={faHome} color='#fff' />
                <span className='label one'>HOME</span>
              </a>
            </div>
            <a href='' className='menu-item'>
              <FontAwesomeIcon icon={faUser} color='#fff' />
              <span className='label two'>ABOUT</span>
            </a>
            <a href='' className='menu-item'>
              <FontAwesomeIcon icon={faTools} color='#fff' />
              <span className='label three'>SKILLS</span>
            </a>
            <a href='' className='menu-item'>
              <FontAwesomeIcon icon={faLaptopCode} color='#fff' />
              <span className='label four'>PROJECTS</span>
            </a>
            <a href='' className='menu-item'>
              <FontAwesomeIcon icon={faEnvelope} color='#fff' />
              <span className='label five'>CONTACT</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
