import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
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
  );
};

export default Footer;
