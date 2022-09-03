import React, { useState } from "react";
import "./signup.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  let navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    let data = {
      firstName,
      lastName,
      email,
      password,
    };

    setErrorMessage("");

    instance
      .post("auth/signup", data)
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");

          navigate("/linkAccount");
        } else {
          setErrorMessage(res.data.errors.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <div className="signup-main">
        <div className="main-logo">
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        {errorMessage && (
          <div className="main-paragraph">
            <p style={{ color: "red" }}>{errorMessage}</p>
          </div>
        )}
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
            Already have an account? <Link to="/"> Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
