import React, { useState, useEffect } from "react";

const DropbarState = ({ options, currentState, handleStateChange }) => {
  return (
    <div>
      <select value={currentState} onChange={handleStateChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropbarState;
