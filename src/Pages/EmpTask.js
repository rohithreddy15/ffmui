

import React, { useState, useEffect } from 'react';
import './Empcss.css';

function EmpTask() {
  const [empId, setEmpId] = useState('');
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch(`http://localhost:8080/yourtasks/${empId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (empId) {
      getTasks();
    }
  }, [empId]);

  const handleEmpIdChange = (e) => {
    setEmpId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (empId) {
      getTasks();
    } else {
      alert('Please enter a valid employee ID.');
    }
  };

  return (
    <div className='filter'>
      <form onSubmit={handleFormSubmit}>
        <label>
          Employee ID:
          <input
            type='number'
            value={empId}
            onChange={handleEmpIdChange}
            placeholder='Enter Employee ID'
          />
        </label>
        <button type='submit'>Get Tasks</button>
      </form>

      <table className='Tasktable'>
        <thead>
          <tr>
            {tasks.length > 0 &&
              Object.keys(tasks[0]).map((field) => <th key={field}>{field}</th>)}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {Object.values(task).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmpTask;
