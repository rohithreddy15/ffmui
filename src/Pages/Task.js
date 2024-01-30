import React, { useState } from 'react';
import Header from './Header';

import EmpTask from './EmpTask';
const Task = () => {
  const [formData, setFormData] = useState({
    id: 1,
    createdby:'',
    assigned_to:'',
    dealerid:'',
    description: '',
    status:'',
    category:'',
    assigned_date: '',
    completed_date: '',
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
   
        //var url = isUpdateMode ? `http://localhost:8080/updatetask/${taskid}` : 'http://localhost:8080/plan';
        var url;
        if (isUpdateMode) {
            var taskid = prompt('Enter taskid to Update:');
            url = `http://localhost:8080//${taskid}`;
          } else {
            url = 'http://localhost:8080/task';
          }
      const response = await fetch(url, {
        method: isUpdateMode?'PUT':'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(isUpdateMode ? 'task data updated successfully!' : 'New task created successfully!');
        setShowForm(false); 
        setFormData({});
      } else {
        const responseBody = await response.text();
        console.error(`Failed to ${isUpdateMode ? 'update' : 'create'} task data. Response:`, response.status, responseBody);      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGet = async () => {
    // Ask for empcode before making the GET request
    var taskid = prompt('Enter taskid:');
    if (!taskid) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/gettask/${taskid}`, {
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
    var taskid = prompt('Enter taskId:');
    if (!taskid) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/deltask/${taskid}`, {
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
    <h2>Task</h2>
    <table style={{padding:40}}>
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
    <div>
     <Header/>
        
        {/* <Tasktable/> */}
        <EmpTask/>
       
    {showForm&&(<form onSubmit={handleSubmit}>
      
      <br />
      <label>
        CreatedDate:
        <input type="date" name="createddate" value={formData.created_date} onChange={handleChange} />
      </label>
      <br />
      <label>
        AssignedTo:
        <input type="number" name="assignedto" value={formData.assigned_to} onChange={handleChange} />
      </label>
      <br />
      <label>
        DealerId:
        <input type="number" name="dealerid" value={formData.dealerid} onChange={handleChange} />
      </label>
      <br />
      <label>
        Status:
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </label>
      <br />
      {/* <label>
        Category:
        </label>
         <select name="category" value={formData.category} onChange={handleChange}>
         <option>Comlpaints</option>
         <option>Payment Collection</option>
         <option>Promotions</option>
         <option>Other</option>
         </select>
      <br/> */}
      <label>
        StartDate:
        <input type="date" name="assigneddate" value={formData.assigned_date} onChange={handleChange} />
      </label>
      <br></br>
      {/* <label>
        Completed_date:
        <input type="date" name="completeddate" value={formData.completed_date} onChange={handleChange} />
      </label>
      <br /> */}
      <button type="submit">{isUpdateMode ? 'Update task' : 'Create task'}</button>
    </form>)}
    </div>
    </>
  );
};

export default Task;
