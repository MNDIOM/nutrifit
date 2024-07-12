import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';
const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clearing local storage, redirecting to login)
    localStorage.clear(); // Clear all stored data upon logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="welcome-page">
      <h2>Welcome!</h2>
      <p>This is your welcome page.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
