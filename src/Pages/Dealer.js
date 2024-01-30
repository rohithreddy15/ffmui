

import './Employee.css';
import React, { useState } from 'react';
import Header from './Header';
  const DealerForm = () => {
    //const { future } = useMyContext();
    // State variables to manage form data
    const [formData, setFormData] = useState({
      id: '',
      first_name: '',
      last_name: '',
      address_line1: '',
      address_line2: '',
      street: '',
      area: '',
      mandal: '',
      districtId: '',
      stateid: '',
      cityid: '',
    });
    const [showForm, setShowForm] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  
    // Function to handle form submission
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // You can perform actions with the form data, like sending it to a server
    //   console.log('Form data submitted:', formData);
    // };
  
    // Function to handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
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
   
        //var url = isUpdateMode ? `http://localhost:8080/updateplan/${planid}` : 'http://localhost:8080/plan';
        var url;
        if (isUpdateMode) {
            var dealerid = prompt('Enter Dealerid to Update:');
            url = `http://localhost:8080/dealerupdate/${dealerid}`;
          } else {
            url = 'http://localhost:8080/dealer';
          }
      const response = await fetch(url, {
        method: isUpdateMode?'PUT':'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(isUpdateMode ? 'Dealer data updated successfully!' : 'New Dealer registered successfully!');
        setShowForm(false); 
        setFormData({});
      } else {
        const responseBody = await response.text();
        console.error(`Failed to ${isUpdateMode ? 'update' : 'create'} dealer data. Response:`, response.status, responseBody);      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGet = async () => {
    // Ask for empcode before making the GET request
    var dealerid = prompt('Enter Dealerid:');
    if (!dealerid) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/dealer/${dealerid}`, {
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
    // Ask for empcode before making the DELETE request
    var dealerid = prompt('Enter DealerId:');
    if (!dealerid) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/dealerdel/${dealerid}`, {
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
      <>
      <div>
    <h2>Dealer Registration</h2>
    <table style={{padding:30}}>
      <tr>
    <td><button onClick={handleCreate}>Create</button></td>
      <td><button onClick={handleUpdate}>Update</button></td>
      <td><button onClick={handleGet}>Get</button></td>
      <td> <button onClick={handleDelete}>Delete</button></td>
      </tr>
      </table>
      </div>
      <div >
          <Header/>
        
    <div className='form-container'>
        {showForm&&(<form onSubmit={handleSubmit} >
          
          <br />
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* Add similar labels and inputs for other attributes */}
          {/* Address Line 1, Address Line 2, Street, Area, Mandal, etc. */}
          {/* For brevity, I'm providing a template for a few attributes */}
          <label>
            Address Line 1:
            <input
              type="text"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address Line 2:
            <input
              type="text"
              name="address_line2"
              value={formData.address_line2}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Mandal:
            <input
              type="text"
              name="mandal"
              value={formData.mandal}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            cityid:
            <input
              type="text"
              name="cityid"
              value={formData.cityid}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            districtId:
            <input
              type="text"
              name="districtid"
              value={formData.districtid}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            stateid:
            <input
              type="text"
              name="stateid"
              value={formData.stateid}
              onChange={handleChange}
            />
          </label>
  
          <br />
          {/* Continue adding labels and inputs for the remaining attributes */}
          <button type="submit">{isUpdateMode ? 'Update Dealer' : 'Create Dealer'}</button>
        </form>)}
        </div>
      </div>
      </>
    );
  };


export default DealerForm;





