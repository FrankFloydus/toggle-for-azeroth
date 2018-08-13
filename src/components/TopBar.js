import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TopBar = () => {
  const alliance = {
    color: "#71aae6"
  };

  const horde = {
    color: "#dc717b"
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
        Toggle for Azeroth
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={horde}
              activeClassName="active"
              to={process.env.PUBLIC_URL + "/horde"}
            >
              For The Horde!
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={alliance}
              activeClassName="active"
              to={process.env.PUBLIC_URL + "/alliance"}
            >
              For The Alliance!
            </NavLink>
          </li>
        </ul>
        <a
          href="https://github.com/FrankFloydus/toggle-for-azeroth"
          className="nav-link text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg" />
        </a>
        <a
          href="https://twitter.com/FrankFloydus"
          className="nav-link text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-lg" />
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
