import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header style={headerStyle}>
      <div style={brandingStyle}>
        <h1>Driving License App</h1>
      </div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/driving-assessment">Assessment</Link>
          </li>
          {/* Add more navigation links as needed */}
          {isLoggedIn ? (
            <li style={liStyle}>
              <button onClick={onLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li style={liStyle}>
                <Link to="/login">Login</Link>
              </li>
              <li style={liStyle}>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const brandingStyle = {
  flex: '1',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: '0',
  padding: '0',
};

const liStyle = {
  fontSize: '1.2rem',
};

export default Header;
