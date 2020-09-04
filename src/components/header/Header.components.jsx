import React from "react";
import Navigator from "../navigator/navigator.component";


import './header.style.scss'
  

const Header = () => {
  return (
    <div className='header'>
      <h3 className='head-text'>
        UN<span className='span-text'>BOX</span><p>one click and get right...</p>
      </h3>
      
      <Navigator />
    </div>
    
  );
};

export default Header;
