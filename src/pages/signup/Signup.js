import React from "react";
import "./signup.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-main">
        <div className="main-logo">
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        <div className="main-paragraph">
          <p>Track all your bank expenses in one place</p>
        </div>
        <div className="form-container">
          <form>
            <div className="form-name">
              <div>
                <input
                  className="first-name"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  className="last-name"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-email">
              <input className="email" name="email" placeholder="Email" />
            </div>
            <div className="form-password">
              <input
                className="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </form>
        </div>
        <div className="button-container">
          <Button className="button"> GET STARTED</Button>
        </div>

        <div className="already-container">
          <p>
            {" "}
            Already have an account? <Link to="/login"> Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
