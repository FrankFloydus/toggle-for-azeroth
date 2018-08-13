import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import horde_logo from "../images/Logo-horde.png";
import alliance_logo from "../images/Logo-alliance.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col text-center">
          <h1 className="h3 font-weight-light">Choose your faction</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center mb-5">
          <Link to={process.env.PUBLIC_URL + "/horde"}>
            <img className="w-25" src={horde_logo} alt="" />
          </Link>
        </div>
        <div className="col-md-6 text-center mb-5">
          <Link to={process.env.PUBLIC_URL + "/alliance"}>
            <img className="w-25" src={alliance_logo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
