import React, { useState, useEffect } from "react";
import Table from "./Table";
import Dropbarstate from "./DropbarState";
import Dropbarcity from "./Dropbarcity";

import "./Searchbank.css";

const Searchbank = () => {
  const [options, setOptions] = useState([]);
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  function handleStateChange(event) {
    setCurrentState(event.target.value);
    console.log(event.target.value);
  }

  function handleCityChange(event) {
    setCurrentCity(event.target.value);
  }

  useEffect(() => {
    fetch("https://oyster-app-g7knb.ondigitalocean.app/state")
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error(error));
  }, []);

  const [cities, setcities] = useState([]);

  useEffect(() => {
    fetch(
      `https://oyster-app-g7knb.ondigitalocean.app/city/${currentState}/state`
    )
      .then((response) => response.json())
      .then((data) => setcities(data))
      .catch((error) => console.error(error));
  }, [currentState]);

  return (
    <>
      <div>
        <Dropbarstate
          options={options}
          currentState={currentState}
          handleStateChange={handleStateChange}
        />
        <Dropbarcity
          cities={cities}
          currentCity={currentCity}
          handleCityChange={handleCityChange}
        />
      </div>
      <div className="datatable">
        <Table currentState={currentState} currentCity={currentCity} />
      </div>
    </>
  );
};

export default Searchbank;
