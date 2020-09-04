import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import Block from "../block/block.component";
import Cnn from "../../img/cnn.jpeg";
import Goal from "../../img/goal.jpeg";
import Sci from "../../img/scihub.png";
import Dstv from "../../img/dstv.jpeg";
import Audio from "../../img/admack.jpeg";
import Git from "../../img/git.png";
import "./hot.style.scss";

class Hot extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "cnn",
          bgImg:  Cnn ,
        },
        {
          id: 2,
          title: "dstv",
          bgImg: Dstv,
        },
        {
          id: 3,
          title: "git",
          bgImg: Git,
        },
        {
          id: 4,
          title: "goal",
          bgImg: Goal,
        },
        {
          id: 5,
          title: "audio",
          bgImg: Audio
        },
        {
          id: 6,
          title: "sci",
          bgImg: Sci
        },
      ],
    };
  }

  render() {
    return (
      <div className='hot-Box'>
        <div className='hot-head
        '><span>UNBOX HOT  <i><FontAwesomeIcon icon={faFire } /></i></span></div>
      <div className='hotbox'>
       
        {this.state.sections.map(({ id, title, bgImg }) => (
          <Block key={id} title={title} bgImg={bgImg} />
        ))}
      </div>

      </div>
    );
  }
}

export default Hot;
