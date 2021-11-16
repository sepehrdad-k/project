import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Class, setClass] = useState([
    "nav-link active",
    "nav-link",
    "nav-link",
  ]);
  return (
    <header className="nav">
      <h1>Navbar</h1>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link
              onClick={() =>
                setClass(["nav-link active", "nav-link", "nav-link"])
              }
              className={Class[0]}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                setClass(["nav-link", "nav-link active", "nav-link"])
              }
              className={Class[1]}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                setClass(["nav-link", "nav-link", "nav-link active"])
              }
              className={Class[2]}
              to="/Users"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
