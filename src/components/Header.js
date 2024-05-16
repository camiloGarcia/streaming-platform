import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import movies from '../moviesData';
import '../styles/Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    const movie = movies.find(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    if (movie) {
      navigate(`/movie/${movie.id}`);
    } else {
      alert('Movie not found');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header bg-dark text-white py-3">
      <div className="container">
        <div className="header__top d-flex justify-content-between align-items-center">
          <h1 className="header__title mb-0">Streaming Platform</h1>
          <nav className="header__nav">
            <Link to="/" className="header__link text-white mx-2">Home</Link>
          </nav>
        </div>
        <div className="header__search-bar d-flex mt-3">
          <input
            type="text"
            className="header__input form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}  
            placeholder="Search for a movie..."
          />
          <button className="header__button btn btn-primary ml-2" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
