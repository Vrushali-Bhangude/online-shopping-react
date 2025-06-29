import { useState } from 'react';
import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='nav'>
      <div className='nav-logo'>
        <h1>Cloth Store</h1>
      </div>

      <div className="nav-search">
        <input type="text" placeholder='Search...' />
        <button>Search</button>
      </div>

<div className={`nav-list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login"><button className='login'>Login</button></Link></li>
    <li><Link to="/signup"><button className='register'>Register</button></Link></li>
 
        </ul>
      </div>

      
      <div className="hamburgerMenu" onClick={toggleMenu}>
         ☰
      </div>
    </div>
  );
}

export default Nav;
