import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="parent-container">
        <div className="container">
          <div className="wrapper">
            <div className="brand">
              <img src="../../src/assets/userlogo.png" alt="" height={"90px"} />
              <h3>User Task - Routing</h3>
            </div>
            <ul className="nav">
              <NavLink to="/" className="nav-item">
                <li>Home</li>
              </NavLink>
              <NavLink to="/user" className="nav-item">
                <li>User</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
