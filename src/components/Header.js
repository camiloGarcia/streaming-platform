import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Streaming Platform</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rent">Rent a Movie</Link>
      </nav>
    </header>
  );
};

export default Header;
