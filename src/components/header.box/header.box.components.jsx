import React from "react";
import "./header.box.style.scss";
import Hot from "../hot/hot.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebook} />;
const telegram = <FontAwesomeIcon icon={faTelegram} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

const HeaderBox = () => {
  const HandleClick = () => {
    return <Hot />;
  };
  return (
    <div className='headerBox'>
      <div className='left'>
        <h2>UNBOX</h2>
        <p>
          WALKING <span>TO</span> THE <br />
          <span>SPOTLIGHT</span> WITH <br />
          <span></span>EASE.
        </p>
        <button onClick={HandleClick}>Get Started</button>
      </div>
      <div className='svgg'></div>
      <div className='rotate'>
        <h4>Unbox</h4>
        <a href='http://hh'>{facebook}</a>
        <a href='http://hh'>{twitter}</a>
        <a href='http://hh'>{telegram}</a>
        <a href='http://hh'>{linkedin}</a>
      </div>
    </div>
  );
};

export default HeaderBox;
