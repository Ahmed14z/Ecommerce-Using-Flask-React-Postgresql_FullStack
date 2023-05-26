import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1 className="landing-title">Welcome to Mansy's Shop</h1>
            <div className="button-container">
              <Link to="/login" className="btn btn-primary landing-btn">
                Login
              </Link>
              <Link to="/register" className="btn btn-secondary landing-btn">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
