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
    <header className="header bg-dark text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Streaming Platform</h1>
          <nav>
            <Link to="/" className="text-white mx-2">Home</Link>
          </nav>
        </div>
        <div className="search-bar d-flex mt-3">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button className="btn btn-primary ml-2" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
