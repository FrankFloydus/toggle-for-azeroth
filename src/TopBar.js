import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TopBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Toggle for Azeroth
      </a>
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
            <Link className="nav-link" to="/horde">
              For The Horde!
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alliance">
              For The Alliance!
            </Link>
          </li>
        </ul>
        <a
          href="https://github.com/FrankFloydus/toggle-for-azeroth"
          className="nav-link text-light"
          target="_blank"
        >
          <i className="fab fa-github fa-lg" />
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
