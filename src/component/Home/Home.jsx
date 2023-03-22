import React from "react";
import logo from "../../images/logo.png";
import banner from "../../images/Banner.png";
import aboutimg from "../../images/Aboutimg.jpg";
import chartimg from "../../images/chartimg.webp";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import { tipsArray, blogArray } from "../../constant";

const Home = () => {
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
        <main>
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
          <div className="content">
            <p className="slogan1">Be the Reason Someone Smiles Today!</p>
            <p className="slogan2">Be a Hero - Donate Blood</p>
            <p className="slogan3">
              We are inviting 135 Core Indians to Become Life Savers. Join us in
              this mission.
            </p>

            <div className="btnregist">
              <button className="regsdonor">
                <Link to="/regsdonor">Register as Donor</Link>
              </button>
              <button className="regesrequester">
                <Link to="/regesrequester">Request for Blood</Link>
              </button>
            </div>
            <div className="info">
              <p>
                *DonorNetwork is a real time App connecting the Donor and
                receiver in real-time within minutes
              </p>
              <p>
                *Please note DonorNetwork is not a Blood Bank and does not
                involve in collection , storage & transportation of blood.
              </p>
              <a href="www">Terms and Conditons</a>
            </div>
          </div>
          <hr />
          <div id="aboutus">
            <h1 className="blk">How we make a </h1>
            <h1 className="red"> difference!</h1>

            <div className="aboutcontent">
              <div className="abouttext">
                Our mission is to make it easier for people to donate blood and
                save lives. We believe that every blood donation can make a
                significant difference in someone's life, and our goal is to
                make the process as simple and convenient as possible.
                <br />
                <br /> Our app is designed to connect blood donors directly with
                people looking for blood.It allows users to easily find nearby
                requesters and blood donation centers.
                <br /> <br />
                We are committed to protecting the privacy and security of our
                users' personal information. All data is stored securely, and we
                never share or sell any user data to third parties.
                <br />
                <br /> Join us in our mission to save lives by donating blood
                today. Together, we can make a difference.
              </div>
              <div className="aboutimg">
                <img src={aboutimg} alt="Image" />
              </div>
            </div>
          </div>
          <hr />
          <div className="tips">
            <h1 className="title">Tips</h1>
            <p>
              Here are some tips to put your mind at ease during the blood
              donation process
            </p>

            <div className="block">
              {tipsArray.map((item, index) => (
                <div className="blockitem">
                  <h3>{item.heading}</h3>
                  <div>
                    {item.points.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />

          <div className="bloodchart">
            <h1 className="blk">Learn About </h1>
            <h1 className="red">Donation</h1>
            <div className="chartcontent">
              <div className="chartimg">
                <img src={chartimg} alt="Image" />
                <p>
                  *After donating blood, the body works to replenish the blood
                  loss. This stimulates the <br />
                  production of new blood cells and in turn, helps in
                  maintaining good health.
                  <br /> <br />
                </p>
                <p>
                  * human body contains five liters of blood, which is made of
                  several useful
                  <br /> components i.e. Whole blood, Platelet, and Plasma. Each
                  type of component has <br /> several medical uses and can be
                  used for different medical treatments. <br />
                  <br /> *Your blood donation determines the best donation for
                  you to make. For plasma and platelet <br />
                  donation you must have donated whole blood in past two years.
                </p>
              </div>
              <div className="chart">
                <table>
                  <tr>
                    <th>Blood Type</th>
                    <th>Donate Blood To</th>
                    <th>Receive Blood From</th>
                  </tr>
                  <tr>
                    <td>A+</td>
                    <td>A+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>
                  <tr>
                    <td>O+</td>
                    <td>O+ A+ B+ AB+</td>
                    <td>O+ O-</td>
                  </tr>
                  <tr>
                    <td>B+</td>
                    <td>B+ AB+</td>
                    <td>B+ B- O+ O-</td>
                  </tr>
                  <tr>
                    <td>AB+</td>
                    <td>AB+</td>
                    <td>Everyone</td>
                  </tr>
                  <tr>
                    <td>A-</td>
                    <td>A+ A- AB+ AB-</td>
                    <td>A- O-</td>
                  </tr>
                  <tr>
                    <td>O-</td>
                    <td>Everyone</td>
                    <td>O-</td>
                  </tr>
                  <tr>
                    <td>B-</td>
                    <td>B+ B- AB+ AB-</td>
                    <td>B- O-</td>
                  </tr>
                  <tr>
                    <td>AB-</td>
                    <td>AB+ AB-</td>
                    <td>AB- A- B- O-</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </main>
        <hr />
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

export default Home;
