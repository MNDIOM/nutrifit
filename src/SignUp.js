import React, { useState, useEffect } from 'react';

import './App.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [checked, setChecked] = useState(false); // For "I am not a robot" checkbox
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    const savedDob = localStorage.getItem('dob');
    const savedAddress = localStorage.getItem('address');
    const savedCity = localStorage.getItem('city');
    const savedCountry = localStorage.getItem('country');
    const savedZipCode = localStorage.getItem('zipCode');

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
    if (savedDob) setDob(savedDob);
    if (savedAddress) setAddress(savedAddress);
    if (savedCity) setCity(savedCity);
    if (savedCountry) setCountry(savedCountry);
    if (savedZipCode) setZipCode(savedZipCode);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checked) {
      setError('Please confirm you are not a robot.');
      return;
    }

    if (validateFormData()) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('dob', dob);
      localStorage.setItem('address', address);
      localStorage.setItem('city', city);
      localStorage.setItem('country', country);
      localStorage.setItem('zipCode', zipCode);

      alert('Sign-up data saved!');
      navigate('/welcome'); // Navigate to the welcome page after successful signup
    } else {
      setError('Please fill out all fields correctly.');
    }
  };

  const validateFormData = () => {
    return name && email && phone && dob && address && city && country && zipCode;
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Navbar />
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Your form inputs */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Other form fields */}
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              I am not a robot
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
