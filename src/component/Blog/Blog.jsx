import React from "react";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
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
      <main>abc</main>
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
      ;
    </>
  );
};

export default Blog;
