import React, { useState } from 'react';
import Header from './Header';
import Plantable from './Plantable';
const Plan = () => {
  const [formData, setFormData] = useState({
    id: 1,
    status: '',
    created_date: '',
    completed_date: '',
    distance: 0,
    created_by: 1,
    empid:''
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
   
        //var url = isUpdateMode ? `http://localhost:8080/updateplan/${planid}` : 'http://localhost:8080/plan';
        var url;
        if (isUpdateMode) {
            var planid = prompt('Enter planid to Update:');
            url = `http://localhost:8080/updateplan/${planid}`;
          } else {
            url = 'http://localhost:8080/plan';
          }
      const response = await fetch(url, {
        method: isUpdateMode?'PUT':'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(isUpdateMode ? 'plan data updated successfully!' : 'New plan created successfully!');
        <div>
          {formData.map((item)=>(
            <div key={item.id}>{item.distance}</div>
          ))}
        </div>
        setShowForm(false); 
        setFormData({});
      } else {
        const responseBody = await response.text();
        console.error(`Failed to ${isUpdateMode ? 'update' : 'create'} plan data. Response:`, response.status, responseBody);      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [data1,setData1]=useState("");

  const handleGet = async () => {
    // Ask for empcode before making the GET request
    var planid = prompt('Enter planid:');
    if (!planid) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/getplan/${planid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        setData1("id : "+data.id);


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
    var planid = prompt('Enter planId:');
    if (!planid) return; // Cancelled

    try {
      const response = await fetch(`http://localhost:8080/delplan/${planid}`, {
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
    <h2>Plan</h2>
    <table style={{justifyItems:'center',alignItems
  :'center',padding:40}}>
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
        
       <Plantable/>
       
        {/* <button onClick={handleCreate}>Create</button>
        <p> </p>
      <button onClick={handleUpdate}>Update</button>
      <p></p>
      <button onClick={handleGet}>Get</button>
      
      <p></p>

    <button onClick={handleDelete}>Delete</button> */}
    {showForm&&(<form onSubmit={handleSubmit}>
     
      <br />
      <label>
        Status:
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </label>
      <br />
      <label>
        CreatedDate:
        <input type="date" name="created_date" value={formData.created_date} onChange={handleChange} />
      </label>
      <br />
    
      <br />
      <label>
        Distance:
        <input type="number" name="distance" value={formData.distance} onChange={handleChange} />
      </label>
      <br />
      <label>
        CreatedBy:
        <input type="number" name="created_by" value={formData.created_by} onChange={handleChange} />
      </label>
      <br/>
      <label>
        EmpId:
        <input type="number" name="empid" value={formData.empid} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">{isUpdateMode ? 'Update plan' : 'Create plan'}</button>
    </form>)}
    
    <p> {data1} </p>
    </div>
    </>
  );
};

export default Plan;
