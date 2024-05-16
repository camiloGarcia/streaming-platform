import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
import '../styles/RentMovie.css';

const RentMovie = () => {
  const { movies, updateAvailability } = useMovies();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredMovies);
  };

  const handleRent = (movie) => {
    if (movie.availability > 0) {
      updateAvailability(movie.id, -1);
      setResults([...results]);
      alert(`You have rented ${movie.title} for $${movie.price}`);
    }
  };

  const handleBuy = (movie) => {
    if (movie.availability > 0) {
      updateAvailability(movie.id, -1);
      setResults([...results]);
      alert(`You have bought ${movie.title} for $${movie.buyPrice}`);
    }
  };

  return (
    <div className="rent-movie">
      <h2>Rent or Buy a Movie</h2>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {results.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title} ({movie.year})</h3>
            <p>Director: {movie.director}</p>
            <p>Synopsis: {movie.synopsis}</p>
            <p>Reviews: {movie.reviews}</p>
            <p>Duration: {movie.duration}</p>
            <p>Rent Price: ${movie.price}</p>
            <p>Buy Price: ${movie.buyPrice}</p>
            <p>Available: {movie.availability}</p>
            <button onClick={() => handleRent(movie)} disabled={movie.availability === 0}>Rent</button>
            <button onClick={() => handleBuy(movie)} disabled={movie.availability === 0}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentMovie;
