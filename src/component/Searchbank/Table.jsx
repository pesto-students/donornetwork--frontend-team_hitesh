import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = ({ currentState, currentCity }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://oyster-app-g7knb.ondigitalocean.app/bloodcamp/centers/${currentState}/${currentCity}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [currentState, currentCity]);
  return (
    <div>
      <table className="serchbank">
        <tr>
          <th className="head">Name</th>
          <th className="head">Address</th>
          <th className="head">Phone Number</th>
          <th className="head">Email</th>
          <th className="head">Category</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className="data">{val.title}</td>
              <td className="data">{val.address}</td>
              <td className="data">{val.contact_details}</td>
              <td className="data">{val.email_address}</td>
              <td className="data">{val.organization_type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
