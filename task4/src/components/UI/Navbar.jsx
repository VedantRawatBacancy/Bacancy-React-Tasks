import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="max-container">
        <div className="navbar">
          <ul className="nav">
            <NavLink to="/" className="nav-item">
              <li>Home</li>
            </NavLink>
            <NavLink to="/user" className="nav-item">
              <li>Users</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
