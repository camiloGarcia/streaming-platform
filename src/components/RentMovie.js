import React, { useState } from 'react';
import movies from '../moviesData';
import '../styles/RentMovie.css';

const RentMovie = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredMovies);
  };

  const handleRent = (movie) => {
    alert(`You have rented ${movie.title} for $${movie.price}`);
    // Lógica para alquilar la película
  };

  const handleBuy = (movie) => {
    alert(`You have bought ${movie.title} for $${movie.buyPrice}`);
    // Lógica para comprar la película
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
            <button onClick={() => handleRent(movie)}>Rent</button>
            <button onClick={() => handleBuy(movie)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentMovie;
