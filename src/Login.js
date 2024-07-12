import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with actual login logic (e.g., API call)
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
      navigate('/welcome');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <>
    <Navbar/> {}
   
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">Login</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
