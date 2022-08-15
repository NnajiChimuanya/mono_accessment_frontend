import React, { useState } from "react";
import "./signup.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    let data = {
      firstName,
      lastName,
      email,
      password,
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    console.log(data);
  };

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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="first-name"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="last-name"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
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
          </form>
        </div>
        <div className="button-container">
          <Button onClick={handleSignup} className="button">
            {" "}
            GET STARTED
          </Button>
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
