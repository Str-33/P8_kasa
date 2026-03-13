import React from "react";
import { Link } from "react-router-dom";
import "./CardLocation.css";

function CardLocation({ id, title, cover }) {
  return (
    <Link to={`/location/${id}`}>
      <div
        className="card"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <p className="card-title">{title}</p>
      </div>
    </Link>
  );
}

export default CardLocation;