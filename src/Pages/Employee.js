import React, { useState } from 'react';

const Employee = () => {
  const [formData, setFormData] = useState({
    empcode: 1,
    first_name: '',
    last_name: '',
    addressline_1: '',
    addressline_2: '',
    street: '',
    area: '',
    mandal: '',
    district: '',
    state: '',
    dateofjoin: '',
    dateofbirth: '',
    password: '',
    created_at: '',
    created_by: 1,
    updated_at: '',
    updated_by: 1,
    isactive: false,
    roleid: 1,
    city: '',
    loginid: '',
    mgrid: 0,
    moblieno: '',
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
        <h2>EmployeeForm</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Empcode:
        <input type="number" name="empcode" value={formData.empcode} onChange={handleChange} />
      </label>
      <br />
      <label>
        First Name:
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <br />
      
      <label>
        Address Line 1:
        <input type="text" name="addressline_1" value={formData.addressline_1} onChange={handleChange} />
      </label>
      <br />
      <label>
        Address Line 2:
        <input type="text" name="addressline_2" value={formData.addressline_2} onChange={handleChange} />
      </label>
      <br />
      <label>
        Street:
        <input type="text" name="street" value={formData.street} onChange={handleChange} />
      </label>
      <br />
      <label>
        Area:
        <input type="text" name="area" value={formData.area} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mandal:
        <input type="text" name="mandal" value={formData.mandal} onChange={handleChange} />
      </label>
      <br />
      <label>
        District:
        <input type="text" name="district" value={formData.district} onChange={handleChange} />
      </label>
      <br />
      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date of Join:
        <input type="date" name="dateofjoin" value={formData.dateofjoin} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Created At:
        <input type="datetime-local" name="created_at" value={formData.created_at} onChange={handleChange} />
      </label>
      <br />
      <label>
        Created By:
        <input type="number" name="created_by" value={formData.created_by} onChange={handleChange} />
      </label>
      <br />
      <label>
        Updated At:
        <input type="datetime-local" name="updated_at" value={formData.updated_at} onChange={handleChange} />
      </label>
      <br />
      <label>
        Updated By:
        <input type="number" name="updated_by" value={formData.updated_by} onChange={handleChange} />
      </label>
      <br />
      <label>
        Is Active:
        <input type="checkbox" name="isactive" checked={formData.isactive} onChange={handleChange} />
      </label>
      <br />
      <label>
        Role ID:
        <input type="number" name="roleid" value={formData.roleid} onChange={handleChange} />
      </label>
      <br />
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <br />
      <label>
        Login ID:
        <input type="text" name="loginid" value={formData.loginid} onChange={handleChange} />
      </label>
      <br />
      <label>
        Manager ID:
        <input type="number" name="mgrid" value={formData.mgrid} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mobile No:
        <input type="text" name="moblieno" value={formData.moblieno} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Employee;
