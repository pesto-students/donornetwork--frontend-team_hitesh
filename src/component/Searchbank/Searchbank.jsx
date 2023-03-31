import React from "react";
import "./Searchbank.css";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Searchbank = () => {
  return (
    <div>
      <>
        <div className="container">
          <h1>Nearest Blood Bank</h1>
          <div className="searchinput">
            <select name="state" id="stateselect">
              <option value="delhi">Delhi</option>
              <option value="up">Uttar Pradesh</option>
              <option value="MH">Maharastra</option>
              <option value="PU">Punjab</option>
              <option value="HM">Himachal</option>
            </select>
          </div>
        </div>
      </>
    </div>
  );
};

export default Searchbank;
