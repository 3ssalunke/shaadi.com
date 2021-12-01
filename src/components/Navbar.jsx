import React from "react";
import { clearToken } from "../helpers/auth";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const logout = () => {
    clearToken();
    return history.push("/signin");
  };
  return (
    <div className="navbar">
      <div className="brand">
        <div className="title">Infinite Scroll</div>
      </div>
      <div className="logout">
        <div onClick={logout}>
          <p style={{ color: "white", cursor: "pointer" }}>logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
