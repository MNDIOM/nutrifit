import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button 
        onClick={handleGetStarted} 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
