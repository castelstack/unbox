import React from "react";

import Features from "../../components/features/features.components";
import Hot from "../../components/hot/hot.component";
import Category from "../../components/category/category.component";
//import Forum from "../forum/forum.component";
import HeaderBox from "../../components/header.box/header.box.components";
import Footer from "../../components/footer/footer.component";

import "./homepage.style.scss";

const Homepage = () => {
  return (
    <div className='homepage'>
      <HeaderBox />
      <Features />
      <Hot />
      <Category />
      <Footer />
    </div>
  );
};
export default Homepage;
