import React from "react";

import "./cat.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";



const Cat = ({ title, details, color, element,...props }) => {
  const icon = <FontAwesomeIcon icon={faAngleDoubleRight} />
  return (
    
  
    <div className='cat' style={{
      backgroundColor: `${color}`
    }}>
      <div className='title-box'>

        <i>{icon}</i>
        
      
      <h3 className='title'>{title}</h3>
      </div>
      <span className='details'>{details}</span>
    </div>
  );
};

export default Cat;
