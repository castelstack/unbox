import React from "react";
import "./footer.style.scss";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot'>
        <a href='gg' className='foot__link'>
          home
        </a>
        <a href='gg' className='foot__link'>
          information
        </a>
        <a href='gg' className='foot__link'>
          legal
        </a>
        <a href='gg' className='foot__link'>
          help
        </a>
        <a href='gg' className='foot__link'>
          contact
        </a>
        <a href='gg' className='foot__link'>
          about us
        </a>
          </div>
          <div className='ficon'>
        <div className='ficon__text'>social media</div>
        <a href='gg' className='ficon__link'>
          <i className='ficon__icon flaticon-035-google-plus'></i>
        </a>
        <a href='gg' className='ficon__link'>
          <i className='ficon__icon flaticon-045-facebook'></i>
        </a>
        <a href='gg' className='ficon__link'>
          <i className='ficon__icon flaticon-013-twitter-1'></i>
        </a>
        <a href='gg' className='ficon__link'>
          <i className='ficon__icon flaticon-031-linkedin'></i>
        </a>
        <a href='gg' className='ficon__link'>
          <i className='ficon__icon flaticon-002-youtube'></i>
        </a>
      </div>

          
      <div className='ftext'>
        <span class='ftext__main'>unbox</span>
        <span class='ftext__small'>project of</span>

        <span class='ftext__legal'>
          <span>Copyright &copy: by Okafor Henry</span>
          <span>2020 Castel-hub Nig.</span>
          <span>All rights reserved.</span>
        </span>
      </div>

     
    </div>
  );
};

export default Footer;
