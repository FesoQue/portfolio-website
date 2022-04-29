import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faLaptopCode,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { RiHome5Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { SiCodeforces } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

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
              <span className='label four'>WORKS</span>
            </NavLink>
            <NavLink to='/contact' className='menu-item'>
              <HiOutlineMail />
              <span className='label five'>CONTACT</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
