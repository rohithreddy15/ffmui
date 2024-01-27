import React, { useState } from 'react';

const VisitInfoForm = () => {
  const [formData, setFormData] = useState({
    id: 1,
    from_latitude: 40.7128,
    from_longitude: -74.0060,
    to_latitude: 34.0522,
    to_longitude: -118.2437,
    task_id: 123,
    distance_travelled: 50.75,
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
        <h2>VisitInfo</h2>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        From Latitude:
        <input type="number" name="from_latitude" value={formData.from_latitude} onChange={handleChange} />
      </label>
      <br />
      <label>
        From Longitude:
        <input type="number" name="from_longitude" value={formData.from_longitude} onChange={handleChange} />
      </label>
      <br />
      <label>
        To Latitude:
        <input type="number" name="to_latitude" value={formData.to_latitude} onChange={handleChange} />
      </label>
      <br />
      <label>
        To Longitude:
        <input type="number" name="to_longitude" value={formData.to_longitude} onChange={handleChange} />
      </label>
      <br />
      <label>
        Task ID:
        <input type="number" name="task_id" value={formData.task_id} onChange={handleChange} />
      </label>
      <br />
      <label>
        Distance Travelled:
        <input type="number" name="distance_travelled" value={formData.distance_travelled} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default VisitInfoForm;
