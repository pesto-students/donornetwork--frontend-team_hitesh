import React from "react";

const RecentBloodRequests = ({ requests }) => {
  return (
    <div>
      <h2>Recent Blood Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Name: {request.requesterName}</p>
            <p>Units of Blood Required: {request.unitsRequired}</p>
            <p>Location: {request.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBloodRequests;
