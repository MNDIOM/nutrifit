import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';
const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clearing local storage, redirecting to login)
    localStorage.clear(); // Clear all stored data upon logout
    alert('You are successfully logged out.');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="welcome-page">
      <h2>Welcome to Moe's Nutrifit!</h2>
      <p>thank you for joining Nutrifit!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
