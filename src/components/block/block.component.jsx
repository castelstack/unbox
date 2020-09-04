import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import "./block.style.scss";

const Block = ({ title, bgImg }) => {
  return (
    <div className='block' style={{ backgroundImage: `url(${bgImg})` }}>
      <h4 className='title'>UNBOX {title}</h4>
      <div className='hot-box'>
        <span>HOT</span>
        <i>
          <FontAwesomeIcon icon={faFire} />
        </i>
      </div>
    </div>
  );
};

export default Block;
