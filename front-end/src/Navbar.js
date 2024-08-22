import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Load the menu state from localStorage when the component mounts
  useEffect(() => {
    const storedMenuState = localStorage.getItem('navbarMenuOpen');
    if (storedMenuState) {
      setIsOpen(JSON.parse(storedMenuState));
    }
  }, []);

  // Save the menu state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('navbarMenuOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white">Moe's Nutrifit</h2>
        <button className="text-white" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <div className={`flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="text-white py-2" onClick={toggleMenu}>Home</Link>
        <Link to="/signup" className="text-white py-2" onClick={toggleMenu}>Sign Up</Link>
        <Link to="/login" className="text-white py-2" onClick={toggleMenu}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
