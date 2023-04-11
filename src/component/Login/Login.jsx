import React, { useState } from "react";
import "./Login.css";
import User from "../User/User";

const Login = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value;
    if (phoneNumber === "9999999999") {
      setViewOtpForm(true);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otp = e.target.otp_value.value;
    if (otp === "111111") {
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated) {
    return <User />;
  }

  return (
    <div className="wrapper">
      <h1 className="main-heading">Log-in</h1>
      <p className="sub-text">Sign in using your mobile number.</p>
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={handleLoginSubmit}>
            <div className="input-field">
              <label>Phone Number</label>
              <input
                type="logintext"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="form-wrapper" onSubmit={handleOtpSubmit}>
          <form id="otpForm">
            <div className="input-field">
              <label>Enter OTP</label>
              <input
                type="number"
                placeholder="One time password"
                name="otp_value"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
