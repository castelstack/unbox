import React from "react";

import Features from "../features/features.components";
import Hot from ".././hot/hot.component";
import Category from "../category/category.component";
import Forum from "../forum/forum.component";
import HeaderBox from "../header.box/header.box.components";
import Footer from "../footer/footer.component"

import './body.style.scss'

export const Body = () => {
  return (
    <div className='body'>
      <HeaderBox />
      <Features />
      <Hot />
      <Category />
      <Forum />
      <Footer />
    </div>
  );
};

