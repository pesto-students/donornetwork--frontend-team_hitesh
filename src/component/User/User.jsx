import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import findBlood from "../../images/find_blood.png";
import contributeBlood from "../../images/n_blood.png";
import hospitals from "../../images/n_hospitalIcon.png";
import news from "../../images/news.png";
import refer from "../../images/refer.png";
import { Outlet, Link } from "react-router-dom";
import "./User.css";
import RecentBloodRequests from "./RecentBloodRequests";

const User = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const recentRequests = [
    {
      id: 1,
      requesterName: "anant",
      unitsRequired: 2,
      location: "",
    },
    {
      id: 2,
      requesterName: "rahul",
      unitsRequired: 3,
      location: "lucknow",
    },
    {
      id: 3,
      requesterName: "reet",
      unitsRequired: 1,
      location: "Lucknow",
    },
  ];
  return (
    <>
      <div>
        <div className="main">
          <div class="card">
            <div class="card_background_img"></div>
            <div class="card_profile_img"></div>
            <div class="user_details">
              <div className="name">
                <p>Name</p>
                <h2>Anant Bajpai</h2>
              </div>
              <div className="userID">
                <p>User ID</p>
                <h2>59239</h2>
              </div>
              <div className="bloodgroup">
                <p>Blood Group</p>
                <h2>B+</h2>
              </div>
            </div>
          </div>
          <div className="quick-links">
            <ul>
              <li>
                <Link className="btn btn-link" to="/hospitals">
                  <img src={hospitals} alt="hospitals" />
                  <span>Find Hospitals</span>
                </Link>
              </li>
              <li>
                <Link className="btn btn-link" to="/blood-banks">
                  <img src={findBlood} alt="blood banks" />
                  <span>Find Blood Banks</span>
                </Link>
              </li>
              <li>
                <Link className="btn btn-link" to="/blogs">
                  <img src={news} alt="blogs" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link className="btn btn-link" to="/contribute">
                  <img src={contributeBlood} alt="logo" />
                  <span>Contribute</span>
                </Link>
              </li>
              <li>
                <Link className="btn btn-link" to="/timeline">
                  <img src={refer} alt="logo" />
                  <span>Timeline</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Blood Donation App</h1>
          <RecentBloodRequests requests={recentRequests} />
        </div>
      </div>
    </>
  );
};

export default User;
