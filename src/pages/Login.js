import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(''); 

    try {
   
      const response = await axios.get('https://reqres.in/api/users?page=2');
      const users = response.data.data; 

      
      const isValidUser = users.some(
        (user) => user.first_name === firstName && user.last_name === lastName
      );

      if (isValidUser) {
     
        onLogin();
      } else {
       
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;

