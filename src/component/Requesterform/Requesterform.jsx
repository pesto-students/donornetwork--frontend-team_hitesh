import React from "react";
import logo from "../../images/logo.png";
import "./Requesterform.css";
import { Outlet, Link } from "react-router-dom";

const Requesterform = () => {
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
          <span className="aboutnav">About</span>
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
          <h1>Blood Request Form</h1>
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
                  <label>Patient Name*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>Attendee Name*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>Attendee's Phone*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>City*</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label>Required Blood Group*</label>
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
              </div>
              <div>
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
                <div>
                  <label>Request type*</label>
                  <select>
                    <option value=""></option>
                    <option value="1"> Blood</option>
                    <option value="2"> Platelets</option>
                  </select>
                </div>
                <div>
                  <label>Quantity</label>
                  <input type="text" name="quantity" />
                </div>
                <div>
                  <label>Required date</label>
                  <input type="text" name="requireddate" />
                </div>
                <div>
                  <label>Address for donation</label>
                  <input type="text" name="pincode" />
                </div>
              </div>
              <div>
                <form action="/action_page.php">
                  <label>Doctors prescription</label>

                  <input type="file" id="myFile" name="filename" />
                </form>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Terms and Conditions</h3>
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

export default Requesterform;
