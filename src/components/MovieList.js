import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const movies = [
  { id: 1, title: 'Movie 1', year: 2020 },
  { id: 2, title: 'Movie 2', year: 2021 },
  // ... otros datos de películas
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
