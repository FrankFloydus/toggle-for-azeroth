import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TopBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Toggle for Azeroth
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              For The Horde!
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              For The Alliance!
            </a>
          </li>
        </ul>
        <span class="navbar-text">
          <i class="fab fa-github fa-lg" />
        </span>
      </div>
    </nav>
  );
};

export default TopBar;
