import React from "react";
import "./login.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-main">
        <div className="main-logo">
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        <div className="main-paragraph">
          <p>Securely login to your account</p>
        </div>
        <div className="form-container">
          <form>
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
            <div className="options">
              <div className="options-main">
                <div className="check-box">
                  <input type={"checkbox"} name="remember-me" />
                  <label htmlFor="remember-me"> Remember me</label>
                </div>
                <div className="forgot">
                  <Link className="forgot-password" to={"/forgotPassword"}>
                    {" "}
                    I Forgot my password
                  </Link>
                </div>
              </div>
            </div>

            <div className="button-container">
              <Button
                onClick={() => console.log("mmmm")}
                className="button-login"
              >
                {" "}
                GET STARTED
              </Button>
            </div>
          </form>
          <div className="dont-container">
            <p>
              Don't have an account? <Link to="/signup"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
