import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default GetStarted;
