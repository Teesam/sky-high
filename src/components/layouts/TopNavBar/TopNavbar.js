import './TopNavBar.css';
import React from 'react';

const TopNavbar = () => {
  return (
  <nav className='nav-bar'>
    <span className='logo-holder'>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className=""
        alt="SkyHigh Logo"
      />
      <h3 className="">
        SkyHigh
      </h3>
    </span>
  </nav>
  )
  };
export default TopNavbar;
