import React, { useState } from 'react';
import axios from 'axios';
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
      <h2>Distance Calculator</h2>
      <form onSubmit={handleCalculateDistance}>
        <label>
          Enter Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </label>
        <button type="submit">Calculate Distance</button>
      </form>
      
      {distance !== null && (
        <p>The total distance covered: {distance}</p>
      )}
    </div>
  );
}

export default DistanceCalculator;


