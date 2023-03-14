import React from "react";
import "./Searchbank.css";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Searchbank = () => {
  return (
    <div>
      <>
        <header className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            <span className="homenav">
              <Link to="/">Home</Link>
            </span>
            <span className="aboutnav">About</span>
            <span className="blog">Blog</span>
            <span className="searchblood">
              <Link to="/searchbloodbank">Search blood bank</Link>
            </span>
            <button className="loginbtn">Login</button>
          </div>
        </header>
        <div className="container">
          <h1>Nearest Blood Bank</h1>
          <div className="searchinput">
            <select name="state" id="stateselect">
              <option value="delhi">Delhi</option>
              <option value="up">Uttar Pradesh</option>
              <option value="MH">Maharastra</option>
              <option value="PU">Punjab</option>
              <option value="HM">Himachal</option>
            </select>
          </div>
        </div>
      </>
    </div>
  );
};

export default Searchbank;
