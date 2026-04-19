import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logokasa.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo Kasa" className="navbar-logo" />
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
        <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>A Propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;