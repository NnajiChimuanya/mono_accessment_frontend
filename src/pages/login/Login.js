import React, { useState } from "react";
import "./login.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    let data = {
      email,
      password,
    };

    instance
      .post("auth/login", data)
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          setEmail("");
          setPassword("");

          navigate("/dashboard");
        } else {
          setErrorMessage(res.data.error.error);
        }
      })
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login-main">
        <div className="main-logo">
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        {errorMessage && (
          <div className="main-paragraph">
            <p style={{ color: "red" }}>{errorMessage}</p>
          </div>
        )}
        <div className="main-paragraph">
          <p>Securely login to your account</p>
        </div>
        <div className="form-container">
          <form>
            <div className="form-email">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-password">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Button onClick={handleLogin} className="button-login">
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
