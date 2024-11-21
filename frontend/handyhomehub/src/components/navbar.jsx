import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar({ setShowLogin, isLoggedIn, onLogout }) {
  const [isNavExpanded, setNavExpanded] = useState(false);

  const toggleNav = () => {
    setNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#e3f2fd', borderRadius: '20px' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" className="logo-img" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/privacy">Privacy</Link>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            {/* Cart Icon */}
            <li className="nav-item">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to="/login"> <button  className="nav-link">Login</button> </Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
