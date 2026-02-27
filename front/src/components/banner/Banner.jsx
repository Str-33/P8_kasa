import React from "react";
import "./Banner.css";
import bannerImg from "./assets/banner.png";

function Banner() {
  return (
    <div className="banner" style={{ '--banner-img': `url(${bannerImg})` }}>
      <p className="banner-text">Chez nous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;