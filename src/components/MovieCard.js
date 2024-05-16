import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} className="movie-card-image" />
      <h3>{movie.title} ({movie.year})</h3>
      <p>Director: {movie.director}</p>
      <p>Synopsis: {movie.synopsis}</p>
      <p>Reviews: {movie.reviews}</p>
      <p>Duration: {movie.duration}</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
