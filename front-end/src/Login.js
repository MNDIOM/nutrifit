import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


const Login = () => {
  const [emailOrPhoneOrUsername, setEmailOrPhoneOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with actual login logic (e.g., API call)
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (
      (emailOrPhoneOrUsername === storedEmail ||
        emailOrPhoneOrUsername === storedPhone ||
        emailOrPhoneOrUsername === storedUsername) &&
      password === storedPassword
    ) {
      alert('Login successful!');
      navigate('/welcome');
    } else {
      alert('Invalid email, phone, username or password.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
     
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="emailOrPhoneOrUsername">Email, Phone, or Username:</label>
            <input
              type="text"
              id="emailOrPhoneOrUsername"
              value={emailOrPhoneOrUsername}
              onChange={(e) => setEmailOrPhoneOrUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
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
