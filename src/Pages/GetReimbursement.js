import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import './getReim.css';

function DistanceCalculator() {
  const [employeeId, setEmployeeId] = useState('');
  const [distance, setDistance] = useState(null);

  const handleCalculateDistance = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
      // API endpoint URL with the employee ID parameter
      const apiUrl = `http://localhost:8080/distance/${employeeId}`;

      // Make a GET request to the API
      const response = await axios.get(apiUrl);

      // Extract the distance value from the response
      const distanceValue = response.data;

      // Set the distance in the state
      setDistance(distanceValue);
    } catch (error) {
      // Handle errors, such as invalid employee ID or API failure
      console.error('Error:', error.message);
    }
  };

  return (

    <div>
      <Header/>
      <h2>Fuel Reimbursement Calculator</h2>
      <form onSubmit={handleCalculateDistance}>
        <label>
           Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </label>
        <button type="submit">Calculate Distance</button>
      </form>
      
      {distance !== null && (
        <div>
        {/* <p>The total distance covered by you : {distance} KM </p>
        <br/>
        <p>Cost per 1 KM travelled is 10 INR</p>
        <br/>
        <p>Therefore your Fuel Reimbursement is {distance*10}</p> */}
        <table>
          <tr>
            <td>Distance :  </td>
            <td>{distance}KM</td>
          </tr>
          <tr>
            <td>Rate(per KM) :  </td>
            <td>10 INR</td>
          </tr>
          <tr>
            <td>Amount :  </td>
            <td>{distance*10}</td>
          </tr>
        </table>
       
       </div>
      )}
    </div>
  );
}

export default DistanceCalculator;


