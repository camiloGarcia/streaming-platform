import React, { useState } from 'react';
import '../styles/RentMovie.css';

const movies = [
  { id: 1, title: 'Movie 1', year: 2020, price: 4.99 },
  { id: 2, title: 'Movie 2', year: 2021, price: 3.99 },
  // ... otros datos de películas
];

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

  return (
    <div className="rent-movie">
      <h2>Rent a Movie</h2>
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
            <p>Price: ${movie.price}</p>
            <button onClick={() => handleRent(movie)}>Rent</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentMovie;
