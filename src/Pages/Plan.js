import React, { useState } from 'react';

const Plan = () => {
  const [formData, setFormData] = useState({
    id: 1,
    status: '',
    created_date: '',
    completed_date: '',
    distance: 0,
    created_by: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
        <h2>Plan</h2>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        Status:
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </label>
      <br />
      <label>
        Created Date:
        <input type="date" name="created_date" value={formData.created_date} onChange={handleChange} />
      </label>
      <br />
      <label>
        Completed Date:
        <input type="date" name="completed_date" value={formData.completed_date} onChange={handleChange} />
      </label>
      <br />
      <label>
        Distance:
        <input type="number" name="distance" value={formData.distance} onChange={handleChange} />
      </label>
      <br />
      <label>
        Created By:
        <input type="number" name="created_by" value={formData.created_by} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Plan;
