import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'

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
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error appropriately
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      <form className="login-form" onSubmit={handleLogin}>
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
