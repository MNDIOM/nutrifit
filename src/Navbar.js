import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedMenuState = localStorage.getItem('navbarMenuOpen');
    if (storedMenuState) {
      setIsOpen(JSON.parse(storedMenuState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('navbarMenuOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const scrollToContent = () => {
    // Replace with the ID or class of the element you want to scroll to
    const element = document.getElementById('content');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Moe's Nutrifit</h2>
        <button className="hamburger" onClick={() => { toggleMenu(); scrollToContent(); }}>
          &#9776;
        </button>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
            <Link to="/Login" onClick={toggleMenu}>Login</Link>
            
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
