import React from "react";

import './navigator.style.scss'

const Navigator = () => {
  return (
    <nav className='navigator'>
      <ul className='list'>
        <li className='list-item'>HOME</li>
        <li className='list-item'>HOT</li>
        <li className='list-item'>CATEGORY</li>
        <li className='list-item'>FORUM</li>
        <li className='list-item'>CONTACT</li>
        <li className='list-item'>ABOUT</li>
      </ul>
    </nav>
  );
};

export default Navigator;
