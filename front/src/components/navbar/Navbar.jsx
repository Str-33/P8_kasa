import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logokasa.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo Kasa" className="navbar-logo" />
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;