// components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'gatsby';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Your Brand</Link>
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" activeClassName="active">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
