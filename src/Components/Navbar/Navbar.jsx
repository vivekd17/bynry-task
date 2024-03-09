import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-name">
        <h3>DASHBOARD</h3>
      </div>
      <div className="nav-login">
          <button className="nav-login-btn">Login</button>
        </div>
    </div>
  );
};

export default Navbar;