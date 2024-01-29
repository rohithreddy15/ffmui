import React, { useState } from 'react';
import Header from './Header';
const VisitInfoForm = () => {
  const [formData, setFormData] = useState({
    id: 1,
    from_latitude: 40.7128,
    from_longitude: -74.0060,
    to_latitude: 34.0522,
    to_longitude: -118.2437,
    taskid: 123,
    distancetravelled: 50.75,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 
  const [showForm, setShowForm] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

   const handleCreate = () => {
    setFormData({}); // Clear existing form data
    setShowForm(true);
    setIsUpdateMode(false);
  };

  const handleUpdate = () => {
    setShowForm(true);
    setIsUpdateMode(true);
 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          // var url = isUpdateMode ? `http://localhost:8080/empupdate/${empCode}` : 'http://localhost:8080/emp';
       var url;
       if (isUpdateMode) {
        var id = prompt('Enter id to Update:');
        url = `http://localhost:8080/visitupdate/${id}`;
      } else {
        url = 'http://localhost:8080/visitinfo';
      }
      const response = await fetch(url, {
        method: isUpdateMode?'PUT':'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(isUpdateMode ? 'Visit data updated successfully!' : 'New VisitInfo created successfully!');
        setShowForm(false); 
        setFormData({});
      } else {
        const responseBody = await response.text();
        console.error(`Failed to ${isUpdateMode ? 'update' : 'create'} employee data. Response:`, response.status, responseBody);      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGet = async () => {
    // Ask for empcode before making the GET request
    var id = prompt('Enter id :');
    if (!id) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/visitget/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        // Optionally, update the form with fetched data
        // setFormData(data);
      } else {
        console.error('Failed to fetch data. Response:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  const handleDelete = async () => {
   
    var id = prompt('Enter id:');
    if (!id) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/visitdel/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Data successfully deleted on the server!');
        // Optionally, reset the form after deletion
        // setFormData({ ...initialFormData });
      } else {
        const responseBody = await response.text();
        console.error('Failed to delete data. Response:', response.status, responseBody);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <Header/>
        <h2>VisitInfo</h2>
        <button onClick={handleCreate}>Create</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleGet}>Get</button>
    
    <button onClick={handleDelete}>Delete</button>
    {showForm&&(<form onSubmit={handleSubmit}>
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
        <input type="number" name="taskid" value={formData.taskid} onChange={handleChange} />
      </label>
      <br />
      <label>
        Distance Travelled:
        <input type="number" name="distancetravelled" value={formData.distancetravelled} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">{isUpdateMode ? 'Update VisitInfo' : 'Create VisitInfo'}</button>
    </form>)}
    </div>
  );
};

export default VisitInfoForm;
