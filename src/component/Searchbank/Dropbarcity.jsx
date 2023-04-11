import React, { useState, useEffect } from "react";

const Dropbarcity = ({ cities, currentCity, handleCityChange }) => {
  return (
    <div>
      <select value={currentCity} onChange={handleCityChange}>
        {cities.map((option) => (
          <option key={option.id} value={option}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropbarcity;
