import React from "react";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";
import "./User.css";

const User = () => {
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
          <div className="quicklinks"></div>
        </div>
      </div>
    </>
  );
};

export default User;
