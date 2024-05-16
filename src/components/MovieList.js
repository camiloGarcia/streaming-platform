import React, { useState, useEffect } from 'react';
import movies from '../moviesData';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movies);
  }, []);

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
