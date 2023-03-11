import React from "react";
import logo from "../../images/logo.png";
import banner from "../../images/Banner.png";
import aboutimg from "../../images/Aboutimg.jpg";
import "./Home.css";
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
            <span className="homenav">Home</span>
            <span className="aboutnav">About</span>
            <span className="blog">Blog</span>
            <button className="loginbtn">Login</button>
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
                <a href="xyz">Register as Donor</a>
              </button>
              <button className="regesrequester">
                <a href="abc">Request for Blood</a>
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
          <div className="aboutus">
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
          <div className="blogtitle">
            <h1>Blog</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, iusto. Aspernatur eius autem inventore adipisci nam
              porro, atque maxime dolor quod, ullam eos. Tenetur, maiores
              veritatis ad nostrum voluptatibus facilis!
            </p>
            <div className="blogblock">
              {tipsArray.map((item, index) => (
                <div className="blockitem">
                  <h3>{item.heading}</h3>
                  <p>{item.points}</p>
                </div>
              ))}
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
