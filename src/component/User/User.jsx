import React from "react";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";
import "./User.css";

const User = () => {
  return (
    <>
      <div>
        <header className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            <span className="homenav">
              <Link to="/">Home</Link>
            </span>
            <span className="aboutnav">
              <a href="#aboutus">About</a>
            </span>
            <span className="blog">
              <Link to="/blog">Blog</Link>
            </span>
            <span className="searchblood">
              <Link to="/searchbloodbank">Search blood bank</Link>
            </span>
            <button className="loginbtn">
              <Link to="/loginbtn">Login</Link>
            </button>
          </div>
        </header>
        <div className="main">
          <div class="card">
            <div class="card_background_img"></div>
            <div class="card_profile_img"></div>
            <div class="user_details">
              <div className="name">
                <p>Name</p>
                <h2>Anant Bajpai</h2>
              </div>
              <div className="userID">
                <p>User ID</p>
                <h2>59239</h2>
              </div>
              <div className="bloodgroup">
                <p>Blood Group</p>
                <h2>B+</h2>
              </div>
            </div>
          </div>
          <div className="quicklinks"></div>
        </div>
      </div>
    </>
  );
};

export default User;
