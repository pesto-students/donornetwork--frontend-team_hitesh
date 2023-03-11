import React from "react";
import logo from "../../images/logo.png";
import banner from "../../images/Banner.png";
import aboutimg from "../../images/Aboutimg.jfif";
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
                <a href="xyz">Regiter as Donor</a>
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
            <h1>About US</h1>
            <div className="aboutcontent">
              <div className="abouttext">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo sequi labore voluptatum esse, architecto perspiciatis.
                Sint, iure modi exercitationem repellat velit totam ea
                blanditiis non vitae possimus aperiam necessitatibus aliquid.
              </div>
              <div className="aboutimg">
                <img src={aboutimg} alt="Image" />
              </div>
            </div>
          </div>
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
          <div className="blog">
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
