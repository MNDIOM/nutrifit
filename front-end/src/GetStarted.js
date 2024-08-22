import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const GetStarted = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Adjust the endpoint as needed
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

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
      {data && (
        <div className="mt-4">
          <p>{data.message}</p> {/* Display data from API */}
        </div>
      )}
    </div>
  );
};

export default GetStarted;
