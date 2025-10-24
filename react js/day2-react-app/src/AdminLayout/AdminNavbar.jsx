import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
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
      <div style={logoStyle}>Admin Panel</div>
      <ul style={navLinksStyle}>
        <li><Link to="/admin/" style={linkStyle}>Dashboard</Link></li>
        <li><Link to="/admin/adminhome" style={linkStyle}>about</Link></li>
        <li><Link to="/admin/admindata" style={linkStyle}>users</Link></li>

      </ul>
    </nav>
  );
};

export default AdminNavbar;

