import React,{ useState,useEffect } from 'react'



function Plantable(props) {
  const id = props.id || 'No  id provided';
  const [plan,setPlan] = useState([]);
  const getPlan = async () => {
    try {
      const response = await fetch("http://localhost:8080/allplans", {
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
      setPlan(data);
    } catch (error) {
      console.error("Error fetching plans:", error);
      // setTransactions([{ transactionStatus: "Error fetching transactions" }]);
    }
    
}

  useEffect(() => {
    getPlan()
  });
  return (
    <div className='filter'>
      {/* //{console.log(plan)} */}
      {/* <p>{transactions.map((transaction)=>console.log(transaction))}</p> */}
      <table className='plantable'>
      <thead>
        <tr>
          {/* Use Object.keys() to get the field names from the first transaction object */}
          {plan.length > 0 &&
            Object.keys(plan[0]).map((field) => (
              <th key={field}>{field}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {plan.map((plan) => (
          <tr key={plan.id}>
            {/* Use Object.values() to get the values of each field in the transaction object */}
            {Object.values(plan).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Plantable;
