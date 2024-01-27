


import React, { useState } from 'react';

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
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform actions with the form data, like sending it to a server
      console.log('Form data submitted:', formData);
    };
  
    // Function to handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <div>
        <h2>Dealer Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </label>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };


export default DealerForm;





