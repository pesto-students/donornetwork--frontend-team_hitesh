import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";
import loginimg from "../../images/loginimg.png";
import "./Login.css";
import { dummylogin } from "../../constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit() {
    if (email === dummylogin.email && password === dummylogin.password) {
      localStorage.setItem("token", "true");
      navigate("/user");
    }
  }
  return (
    <>
      <div>
        <div className="container">
          <div className="loginimg">
            <img src={loginimg} alt="logo" />
          </div>
          <div class="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input
                  type="text"
                  name=""
                  required=""
                  onChange={(e) => setemail(e.target.value)}
                />
                <label id="number">Number</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name=""
                  required=""
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label id="otp">OTP</label>
              </div>

              <button className="loginbtn2" onClick={handleSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
