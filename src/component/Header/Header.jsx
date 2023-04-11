import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <span className="navtext">
            <Link to="/">Home</Link>
          </span>
          <span className="navtext">
            <a href="#aboutus">About</a>
          </span>
          <span className="navtext">
            <Link to="/blog">Blog</Link>
          </span>
          <span className="navtext">
            <Link to="/searchbloodbank">Find a Blood Bank</Link>
          </span>
          <button className="loginbtn">
            <Link to="/loginbtn">Login</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
