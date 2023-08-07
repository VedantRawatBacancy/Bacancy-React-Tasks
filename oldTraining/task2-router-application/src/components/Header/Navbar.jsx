import React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="wrapper">
        <ul className="navigation" style={{ margin: 0 }}>
          <NavLink to="/" className="navitem">
            <li>HOME</li>
          </NavLink>
          <NavLink to="/abstract" className="navitem">
            <li>ABSTRACT</li>
          </NavLink>
          <NavLink to="/galaxy" className="navitem">
            <li>GALAXY</li>
          </NavLink>
          <NavLink className="navitem" onClick="window.location.reload();">
            <li className="nextImage">NEXT IMAGE</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
