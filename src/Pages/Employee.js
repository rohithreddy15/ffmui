import React, { useState } from 'react';
import './Employee.css'
import Header from './Header';
const Employee = () => {
  const [formData, setFormData] = useState({
    empcode: '',
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
    created_by: '',
    updated_at: '',
    updated_by: 1,
    isactive: false,
    roleid: 1,
    city: '',
    loginid: '',
    mgrid: 0,
    moblieno: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          // var url = isUpdateMode ? `http://localhost:8080/empupdate/${empCode}` : 'http://localhost:8080/emp';
       var url;
       if (isUpdateMode) {
        var empCode = prompt('Enter Empcode to Update:');
        url = `http://localhost:8080/empupdate/${empCode}`;
      } else {
        url = 'http://localhost:8080/emp';
      }
      const response = await fetch(url, {
        method: isUpdateMode?'PUT':'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(isUpdateMode ? 'Employee data updated successfully!' : 'New employee created successfully!');
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
    var empCode = prompt('Enter Empcode:');
    if (!empCode) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/empget/${empCode}`, {
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
   
    var empCode = prompt('Enter Empcode:');
    if (!empCode) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/empdel/${empCode}`, {
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
    <h2>Employee</h2>
    <table style={{padding:50}}>
      <tr>
    <td><button onClick={handleCreate}>Create</button></td>
    <td><p>   </p></td>
      <td><button onClick={handleUpdate}>Update</button></td>
      <td><p>   </p></td>
      
      
      <td><button onClick={handleGet}>Get</button></td>
      <td><p>   </p></td>
      <td> <button onClick={handleDelete}>Delete</button></td>
      </tr>
      </table>
      </div>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Header/>
      
       
      <div className='form-container'>
   {showForm&&( <form  onSubmit={ handleSubmit } style={{ marginTop: '20px' }}>
      
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
        <input type="boolean" name="isactive" checked={formData.isactive} onChange={handleChange} />
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
      <button type="submit">{isUpdateMode ? 'Update Employee' : 'SAVE'}</button>
            </form>)}
    
    
    </div>
    </div>
    </>
  );
};

export default Employee;
