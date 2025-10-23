import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "white",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>MyWebsite</div>
      <ul style={navLinksStyle}>
        <li><Link to={'/'} style={linkStyle}>Home</Link></li>
        <li><Link to={'/about'} style={linkStyle}>About</Link></li>
        <li><Link to={'/service'} style={linkStyle}>Services</Link></li>
        <li><Link to={'/contact'} style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
