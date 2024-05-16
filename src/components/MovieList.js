import React, { useState, useEffect } from 'react';
import movies from '../moviesData';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Simular una llamada a la API para obtener las películas
    setMovieList(movies);
  }, []);

  return (
    <div className="container movie-list">
      <div className="row">
        {movieList.map(movie => (
          <div key={movie.id} className="col-md-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
