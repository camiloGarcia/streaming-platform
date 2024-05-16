import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import movies from '../moviesData';
import '../styles/Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const movie = movies.find(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    if (movie) {
      navigate(`/movie/${movie.id}`);
    } else {
      alert('Movie not found');
    }
  };

  return (
    <header className="header">
      <h1>Streaming Platform</h1>
      <nav>
        <Link to="/">Home</Link>
        {/* Eliminar el enlace "Rent a Movie" */}
      </nav>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;
