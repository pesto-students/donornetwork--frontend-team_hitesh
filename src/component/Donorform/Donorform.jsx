import React from "react";
import logo from "../../images/logo.png";
import "./Donorform.css";
import { Outlet, Link } from "react-router-dom";

const Donorform = () => {
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
      <div className="form"></div>
      <div class="main-block">
        <form action="/">
          <h1>Donor Registration Form</h1>
          <fieldset>
            <legend>
              <h3>Account Details</h3>
            </legend>
            <div class="account-details">
              <div>
                <label>Email*</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Password*</label>
                <input type="password" name="name" required />
              </div>
              <div>
                <label>Repeat email*</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Repeat password*</label>
                <input type="password" name="name" required />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Personal Details</h3>
            </legend>
            <div class="personal-details">
              <div>
                <div>
                  <label>Name*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>Phone*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>City*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>Blood Group*</label>
                  <select>
                    <option value=""></option>
                    <option value="1"> A+</option>
                    <option value="2"> A-</option>
                    <option value="3"> B+</option>
                    <option value="4"> B-</option>
                    <option value="5"> AB+</option>
                    <option value="6"> AB-</option>
                    <option value="7"> O+</option>
                    <option value="8"> O-</option>
                    <option value="9"> A1+</option>
                    <option value="10"> A1-</option>
                    <option value="11"> A2+</option>
                    <option value="12"> A2-</option>
                    <option value="13"> A1B+</option>
                    <option value="14"> A1B-</option>
                    <option value="15"> A2B+</option>
                    <option value="16"> A2B-</option>
                    <option value="17"> Bombay Blood Group</option>
                    <option value="18"> INRA</option>
                    <option value="19"> Don't Know</option>
                  </select>
                </div>
                <div>
                  <label>Pin Code</label>
                  <input type="text" name="pincode" />
                </div>
              </div>
              <div>
                <div>
                  <label>Did you get tattooed in past 12 months?*</label>
                  <div class="tatto">
                    <input
                      type="radio"
                      value="none"
                      id="yes"
                      name="tatto"
                      required
                    />
                    <label for="Yes" class="radio">
                      Yes
                    </label>
                    <input
                      type="radio"
                      value="none"
                      id="no"
                      name="tatto"
                      required
                    />
                    <label for="NO" class="radio">
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label>Have you ever tested positive for HIV? *</label>
                  <div class="HIV">
                    <input
                      type="radio"
                      value="none"
                      id="yes"
                      name="HIV"
                      required
                    />
                    <label for="Yes" class="radio">
                      Yes
                    </label>
                    <input
                      type="radio"
                      value="none"
                      id="no"
                      name="HIV"
                      required
                    />
                    <label for="NO" class="radio">
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label>Have you taken Covid-19 vaccine? *</label>
                  <div class="Covid">
                    <input
                      type="radio"
                      value="none"
                      id="yes"
                      name="Covid"
                      required
                    />
                    <label for="Yes" class="radio">
                      Yes
                    </label>
                    <input
                      type="radio"
                      value="none"
                      id="no"
                      name="Covid"
                      required
                    />
                    <label for="NO" class="radio">
                      No
                    </label>
                  </div>
                </div>
                <div class="birthdate">
                  <label>Birthdate*</label>
                  <div class="bdate-block">
                    <select class="day" required>
                      <option value=""></option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select class="mounth" required>
                      <option value=""></option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <input type="text" name="name" required />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Terms and Mailing</h3>
            </legend>
            <div class="terms-mailing" />
            <div class="checkbox">
              <input type="checkbox" name="checkbox" />
              <span>
                I accept the{" "}
                <a href="https://www.w3docs.com/privacy-policy">
                  Privacy Policy
                </a>
              </span>
            </div>
          </fieldset>
          <button className="submitbtn">Submit</button>
        </form>
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
    </>
  );
};

export default Donorform;
