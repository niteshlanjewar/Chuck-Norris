import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const navbarStyles = {
    backgroundColor: '#333',
    padding: '10px 0',
  };

  const listItemStyles = {
    display: 'inline-block',
    marginRight: '20px',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleLogout = () => {
    // Perform the logout action
    // In this example, we'll simply redirect to the signup page
    navigate('/register');
  };

  return (
    <nav style={navbarStyles}>
      <ul className="navbar-list">
        <li className="navbar-item" style={listItemStyles}>
          <NavLink to="/home" style={linkStyles}>Name</NavLink>
        </li>
        <li className="navbar-item" style={listItemStyles}>
          <button onClick={handleLogout} style={buttonStyles}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
