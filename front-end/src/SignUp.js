import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false); // For "I am not a robot" checkbox
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('dob', dob);
      localStorage.setItem('address', address);
      localStorage.setItem('city', city);
      localStorage.setItem('country', country);
      localStorage.setItem('zipCode', zipCode);
      localStorage.setItem('password', password);

      alert('You have successfully signed up!');
      navigate('/login'); // Navigate to the login page after successful signup
    } else {
      setError('Please fill out all fields correctly.');
    }
  };

  const validateFormData = () => {
    return (
      name &&
      lastName &&
      username &&
      email &&
      phone &&
      dob &&
      address &&
      city &&
      country &&
      zipCode &&
      password &&
      confirmPassword &&
      password === confirmPassword
    );
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
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
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </div>
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
