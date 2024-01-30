import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './logincss.css';
function Login() {
  const [loginid, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState('');
  const navigate = useNavigate();

  
  async function handleLogin(event) {
    event.preventDefault();
    if (!loginid.trim()) {
      setError("loginid is required");
      return;
    }
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/login", {
        loginid: loginid,
        password: password,
      });
      console.log(response.data)
      if (response.data.loginid) {
        // Login successful, navigate to the home page or handle accordingly
        navigate('/home');
      } else {
        // Login failed, show an error message or handle accordingly
        setError("Invalid Email or Password")
        alert("Invalid credentials");
      }
    } catch (error) {
      setError("Inavalid Credentials")
      console.error("Error during login:", error);
      // Handle error display or logging as needed
    }
  }
  return (
    <div className="login-container">
      <h2>FFM Login </h2>
      <form onSubmit={handleLogin}>
       
        <div className="form-group">
          <label className="label">
            Username:
            <input
              className="input-field"
              type="email"
              value={loginid}
              onChange={(e) => {
                setLoginId(e.target.value)
                setError("")
              }}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            Password:
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError("")
              }}
            />
          </label>
        </div>
        {error&& <p>{error}</p>}
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;