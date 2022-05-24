import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import RESUME from '../assets/tech-resume.pdf';

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
              <NavLink onClick={handleMenu} to='/'>
                <span className='dsk-nav-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                      fill='#a7a7a7'
                      d='M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z'
                      className='mobile-menu-icon'
                    />
                  </svg>
                </span>
                <span className='dsk-nav-text'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/about'>
                <span className='dsk-nav-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                      fill='#a7a7a7'
                      d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z'
                      className='mobile-menu-icon'
                    />
                  </svg>
                </span>
                <span className='dsk-nav-text'>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/skills'>
                <span className='dsk-nav-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <polygon
                      fill='#a7a7a7'
                      points='388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82'
                      className='mobile-menu-icon'
                    />
                    <polygon
                      fill='#a7a7a7'
                      points='148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181'
                      className='mobile-menu-icon'
                    />
                    <polygon
                      fill='#a7a7a7'
                      points='330.529 16 297.559 16 178.441 496 211.412 496 330.529 16'
                      className='mobile-menu-icon'
                    />
                  </svg>
                </span>
                <span className='dsk-nav-text'>Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/projects'>
                <span className='dsk-nav-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                      fill='#a7a7a7'
                      d='M252.592,496h6.816a108.122,108.122,0,0,0,108-108V332.308a177.481,177.481,0,0,0,66.37-138.531C433.778,95.751,354.027,16,256,16S78.222,95.751,78.222,193.777a177.477,177.477,0,0,0,66.371,138.531V388A108.121,108.121,0,0,0,252.592,496Zm6.816-32h-6.816a76.106,76.106,0,0,1-70.631-48H330.04A76.107,76.107,0,0,1,259.408,464Zm76-80H176.593V344H335.408ZM110.222,193.777C110.222,113.4,175.618,48,256,48s145.778,65.4,145.778,145.777a146.392,146.392,0,0,1-59.817,117.737L341.3,312H170.7l-.665-.486A146.394,146.394,0,0,1,110.222,193.777Z'
                      className='mobile-menu-icon'
                    />
                  </svg>
                </span>
                <span className='dsk-nav-text'>Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenu} to='/contact'>
                <span className='dsk-nav-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                      fill='#a7a7a7'
                      d='M16,112V496H496V112ZM236.8,341.6a32.167,32.167,0,0,0,38.4,0L298.667,324,464,448v16H48V448L213.333,324ZM256,316,48,160V144H464v16ZM48,200,186.667,304,48,408ZM464,408,325.333,304,464,200Z'
                      className='mobile-menu-icon'
                    />
                  </svg>
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
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <polygon
                    fill='#4ee44e'
                    points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75'
                  />
                </svg>
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
