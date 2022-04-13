import React from 'react';
import { FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo-wrapper'>
          <div className='logo'></div>
          <h5>Adebola</h5>
        </div>
        <nav>
          <div className='menu'>
            <button className='menu-btn'>
              <span>
                <FaHome />
              </span>
            </button>
            <button className='menu-btn'>
              <span>
                <FaHome />
              </span>
            </button>
            <button className='menu-btn'>
              <span>
                <FaHome />
              </span>
            </button>
            <button className='menu-btn'>
              <span>
                <FaHome />
              </span>
            </button>
            <button className='menu-btn'>
              <span>
                <FaHome />
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
