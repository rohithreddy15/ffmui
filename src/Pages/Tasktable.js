import React,{ useState,useEffect } from 'react'
import './TaskTable.css';



function Tasktable(props) {
  const id = props.id || 'No  id provided';
  const [task,setTask] = useState([]);
  const getTask = async () => {
    try {
      const response = await fetch("http://localhost:8080/alltasks", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
         //body: JSON.stringify({ id: id })
      });
     
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTask(data);
    } catch (error) {
      console.error("Error fetching plans:", error);
      // setTransactions([{ transactionStatus: "Error fetching transactions" }]);
    }
    
}

  useEffect(() => {
    getTask()
  },[]);
  return (
    <div className='filter'>
        {/* <button onClick={getPlan}>Table</button> */}
      {/* //{console.log(plan)} */}
      {/* <p>{transactions.map((transaction)=>console.log(transaction))}</p> */}
      <table className='Tasktable'>
      <thead>
        <tr>
          {/* Use Object.keys() to get the field names from the first transaction object */}
          {task.length > 0 &&
            Object.keys(task[0]).map((field) => (
              <th key={field}>{field}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {task.map((task) => (
          <tr key={task.id}>
            {/* Use Object.values() to get the values of each field in the transaction object */}
            {Object.values(task).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Tasktable;