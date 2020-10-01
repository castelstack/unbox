import React from "react";
import Navigator from "../navigator/navigator.component";
//import './navigator.style.scss';




import './header.style.scss'
  

const Header = ({currentUser}) => {
  return (
    <div className='header'>
      <h3 className='head-text mobile'>U<span>B</span></h3>
      <h3 className='head-text'>
        UN<span className='span-text'>BOX</span><p>one click and get right...</p>
      </h3>
     
      
      <Navigator currentUser={currentUser}/>
      {
        currentUser ?
          <p className="display-name">Welcome {currentUser.displayName}</p> :
          ""
      }

    </div>
    
  );
};

export default Header;
