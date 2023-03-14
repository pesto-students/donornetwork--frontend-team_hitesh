import React from "react";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";
import loginimg from "../../images/loginimg.png";
import "./Login.css";

const Login = () => {
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
            <span className="aboutnav">About</span>
            <span className="blog">Blog</span>
            <span className="searchblood">
              <Link to="/searchbloodbank">Search blood bank</Link>
            </span>
          </div>
        </header>
        <div className="container">
          <div className="loginimg">
            <img src={loginimg} alt="logo" />
          </div>
          <div class="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required="" />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required="" />
                <label>Password</label>
              </div>
              <a href="#">Submit</a>
            </form>
          </div>
        </div>
        <footer>
          <div className="footerlogo">
            <img src={logo} alt="logo" />
          </div>
          <div className="contact">
            <a href="google.com">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="google.com">I</a>
            <a href="google.com">T</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Login;
