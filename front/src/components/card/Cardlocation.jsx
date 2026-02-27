import React from "react";
import "./CardLocation.css";

function CardLocation({ title }) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
    </div>
  );
}

export default CardLocation;