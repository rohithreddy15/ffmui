// Import necessary React components and hooks
import React, { useState } from 'react';

// Functional component for the Login page
const Login = () => {
  // State variables to manage the username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // You can add authentication logic here
    // For simplicity, let's just log the input values to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // You may redirect the user or perform additional actions after authentication
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
};

export default Login;
