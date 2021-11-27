import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="nav">
      <h1>Navbar</h1>
      <nav className={isOpen ? "nav-bar active" : "nav-bar"}>
        <ul>
          <li>
            <NavLink
              className={(data) =>
                data.isActive ? "nav-link is-active" : "nav-link"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(data) =>
                data.isActive ? "nav-link is-active" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(data) =>
                data.isActive ? "nav-link is-active" : "nav-link"
              }
              to="/dogs"
            >
              Dogs App
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setisOpen(!isOpen)}
        className={isOpen ? "hamburger open" : "hamburger"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
