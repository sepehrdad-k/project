import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Appcontext } from "./App";
const Navbar = React.memo(() => {
  const [isOpen, setisOpen] = useState(false);
  const { setPointer } = useContext(Appcontext);
  return (
    <header className="nav">
      <h1>Navbar</h1>
      <nav className={isOpen ? "nav-bar active" : "nav-bar"}>
        <ul
          onMouseEnter={() => setPointer(true)}
          onMouseLeave={() => setPointer(false)}
        >
          <li>
            <NavLink
              onClick={() => setisOpen(false)}
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
              onClick={() => setisOpen(false)}
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
              onClick={() => setisOpen(false)}
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
        onMouseEnter={() => setPointer(true)}
        onMouseLeave={() => setPointer(false)}
        onClick={() => setisOpen(!isOpen)}
        className={isOpen ? "hamburger open" : "hamburger"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
});

export default Navbar;
