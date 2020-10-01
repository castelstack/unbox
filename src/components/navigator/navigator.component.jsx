import React from "react";

import { Link } from "react-router-dom";

import "./navigator.style.scss";
import { auth } from "../../firebase/firebase.utils";

import { Helmet } from "react-helmet";

const Navigator = ({ currentUser }) => {
  return (
    <div>
      <Helmet>
        (
        <script>
          {`
      
      {function openNav() {
        document.getElementById("myNav").style.width = "100%"
      }}

      {function closeNav() {
        document.getElementById("myNav").style.width = "0%"
      }}
      `}
        </script>
        )
      </Helmet>

      <nav className='navigator'>
        <ul className='list'>
          <li className='list-item'>
            <Link className='nav-link' to='/'>
              HOME
            </Link>
          </li>
          <li className='list-item'>HOT</li>
          <li className='list-item'>
            <Link className='nav-link' to='/category'>
              CATEGORY
            </Link>
          </li>
          <li className='list-item'>CONTACT</li>
          <li className='list-item'>ABOUT</li>
          <li className='list-item'>
            {currentUser ? (
              <div className='list-item' onClick={() => auth.signOut()}>
                sign out
                
              </div>
            ) : (
              <Link className='nav-link' to='/login-signup'>
                login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
