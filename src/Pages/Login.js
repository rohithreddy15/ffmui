// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './logincss.css'
// import axios from 'axios';

// function Login() {
//   const [loginid, setLoginId] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   async function handleLogin(event) {
//     event.preventDefault();

//       const response = await axios.post("http://localhost:8080/login", {
//         loginid: loginid,
//         password: password,
//       });

//       if (response.data.loginid) {
        
//         // Login successful, navigate to the home page or handle accordingly
//         navigate('/home');
//       } else {
        
//         // Login failed, show an error message or handle accordingly
//         alert("Invalid credentials");
//       }
    
    
//   }

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form onSubmit={handleLogin}>
//         <label>
//           Username:
//           <input
//             type="email"
//             value={loginid}
//             onChange={(e) => setLoginId(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [loginid, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        loginid: loginid,
        password: password,
      });

      if (response.data.loginid) {
        // Login successful, navigate to the home page or handle accordingly
        navigate('/home');
      } else {
        // Login failed, show an error message or handle accordingly
        alert("Invalid credentials");
      }
    
    
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="email"
            value={loginid}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
