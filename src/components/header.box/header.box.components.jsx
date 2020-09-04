import React from "react";
import "./header.box.style.scss";
import Hot from "../hot/hot.component";

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
          EASE.
        </p>
        <button onClick={HandleClick}>Get Started</button>
      </div>
      <h4>Unbox</h4>
    </div>
  );
};

export default HeaderBox;
