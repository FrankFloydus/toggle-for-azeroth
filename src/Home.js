import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import horde_logo from "./images/Logo-horde.png";
import alliance_logo from "./images/Logo-alliance.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="h3 font-weight-light">Choose your faction</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center">
          <img className="w-25" src={horde_logo} alt="" />
        </div>
        <div className="col-md-6 text-center">
          <img className="w-25" src={alliance_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
