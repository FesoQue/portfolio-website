import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faLaptopCode,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import { RiHome5Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  // const [isActive, setIsActive] = useState(false);

  let name = 'Q.Dus';
  return (
    <header className='header'>
      <DesktopNav />
      <div className='mobile-header'>
        <nav className='header-row-1'>
          <div className='row-1-wrapper container'>
            <div className='logo'>
              <Link to='/'>
                <h2>{name}</h2>
              </Link>
            </div>

            <p className='version'>v1.0</p>
            {/* <button
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
          </button> */}
          </div>
        </nav>
        {/* <nav className={`${isActive ? 'header-row-2 show' : 'header-row-2'}`}> */}
        <nav className='header-row-2 show'>
          <div className='row-2-wrapper container'>
            <div className='nav-menu-list'>
              <div>
                <NavLink to='/' className='menu-item'>
                  <RiHome5Line />
                  <span className='label one'>HOME</span>
                </NavLink>
              </div>
              <NavLink to='/about' className='menu-item'>
                <AiOutlineUser />
                <span className='label two'>ABOUT</span>
              </NavLink>
              <NavLink to='/skills' className='menu-item'>
                <VscTools />
                <span className='label three'>SKILLS</span>
              </NavLink>
              <NavLink to='/projects' className='menu-item'>
                <RiCodeSSlashFill />
                <span className='label four'>WORK</span>
              </NavLink>
              <NavLink to='/contact' className='menu-item'>
                <HiOutlineMail />
                <span className='label five'>CONTACT</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
