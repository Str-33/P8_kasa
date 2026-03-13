import React from "react";
import "./Banner.css";

function Banner({ imageSrc, text }) {
  return (
    <div
      className="banner"
      style={{ "--banner-img": `url(${imageSrc})` }}
    >
      <p className="banner-text">{text}</p>
    </div>
  );
}

export default Banner;