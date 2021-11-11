import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav">
      <h1>Navbar</h1>
      <nav className="nav-bar">
        <ul>
          <li className="taghi">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Contact">
              Contacts
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
