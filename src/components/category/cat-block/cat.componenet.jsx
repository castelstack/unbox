import React from "react";

import "./cat.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  * as fa from "@fortawesome/free-solid-svg-icons";

const Cat = ({ title, details, color, element, ...props }) => {
  const icons = <FontAwesomeIcon icon={fa} />;
  // const icon = <FontAwesomeIcon icon={element} />;
  return (
    <div
      className='cat'
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div className='title-box'>

        <i>{icons}</i>

      <h3 className='title'>{title}</h3>
      </div>

    </div>
  );
};

export default Cat;
