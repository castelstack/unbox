import React from "react";
import "./footer.style.scss";

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

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot'>
        <a href='gg' className='link'>
          home
        </a>
        <a href='gg' className='link'>
          information
        </a>
        <a href='gg' className='link'>
          legal
        </a>
        <a href='gg' className='link'>
          help
        </a>
        <a href='gg' className='link'>
          contact
        </a>
        <a href='gg' className='link'>
          about us
        </a>
      </div>

      <div className='socials'>
        <span className='social-text'></span>
        <div className='social-icons'>
          <a href='http://hh'>{facebook}</a>
          <a href='http://hh'>{twitter}</a>
          <a href='http://hh'>{telegram}</a>
          <a href='http://hh'>{linkedin}</a>

        </div>
      </div>

      <div className='ftext'>
        <span className='ftext__main'>unbox</span>
        <span className='ftext__small'>project of</span>

        <span className='ftext__legal'>
          <span>Copyright &copy: by Okafor Henry</span>
          <span>2020 Castel-hub Nig.</span>
          <span>All rights reserved.</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
