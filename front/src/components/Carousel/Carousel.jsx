import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  const precedent = () => setIndex((index - 1 + pictures.length) % pictures.length);
  const suivant = () => setIndex((index + 1) % pictures.length);

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={pictures[index]}
        alt={"Photo " + (index + 1)}
      />

      {pictures.length > 1 && (
        <React.Fragment>
          <button className="carousel__btn carousel__btn--gauche" onClick={precedent}>
            <span className="carousel__chevron carousel__chevron--gauche" />
          </button>
          <button className="carousel__btn carousel__btn--droite" onClick={suivant}>
            <span className="carousel__chevron carousel__chevron--droite" />
          </button>
          <span className="carousel__compteur">
            {index + 1}/{pictures.length}
          </span>
        </React.Fragment>
      )}
    </div>
  );
}

export default Carousel;