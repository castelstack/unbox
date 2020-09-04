import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faSurprise,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

import "./features.style.scss";

const Features = () => {
  return (
    <div className='features'>
      <div className='feature-box'>
        <i>
          <FontAwesomeIcon icon={faAd} />
        </i>
        <p className='text'>
          <span>NO AD</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos?
          eveniet dolores sit quos
        </p>
      </div>

      <div className='feature-box'>
        <i>
          <FontAwesomeIcon icon={faSurprise} />
        </i>
        <p className='text'>
          <span>UNIQUE</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos?
          dolores sit quos
        </p>
      </div>
      <div className='feature-box'>
        <i>
          <FontAwesomeIcon icon={faTimes} />
        </i>
        <p className='text'>
          <span>TIME</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos?
          dolores sit quos
        </p>
      </div>
      <div className='feature-box'>
        <i>
          <FontAwesomeIcon icon={faSave} />
        </i>
        <p className='text'>
          <span>RELIABLE</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos?
          Perferendiseveniet dolores sit quos
        </p>
      </div>
    </div>
  );
};
export default Features;
