import React, { useState } from 'react';

const Navbar = ({ onLogout }) => {
  // Assuming you have an isAuthenticated state
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
    // In this example, we'll simply update the isAuthenticated state to false
    setIsAuthenticated(false);

    // You can also perform other actions here, such as clearing user data or tokens.
  };

  return (
    <nav style={navbarStyles}>
      <ul className="navbar-list">
        {/* Add condition to show/hide elements based on authentication state */}
        {isAuthenticated && (
          <>
            <li className="navbar-item" style={listItemStyles}><a href="#" style={linkStyles}>Name</a></li>
            <li className="navbar-item" style={listItemStyles}><button onClick={handleLogout} style={buttonStyles}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
