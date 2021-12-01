import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated, setToken } from "../helpers/auth";
import SidebarImage from "../images/sidebar.jpg";

const SignIn = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated()) return <Redirect to="/" />;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError("");
    if (username === "foo" && password === "bar") {
      setToken("qwerty123");
      history.push("/");
      return;
    } else {
      setError("Invalid Username or Password");
      return;
    }
  };

  return (
    <div className="signin">
      <div className="left-side">
        <img src={SidebarImage} alt="sidebar"></img>
      </div>
      <div className="right-side">
        <div className="right-side-content">
          <div className="title">Sign In</div>
          <form onSubmit={onSubmitHandler}>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              className="submit-button"
              type="submit"
              disabled={!username && !password}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
