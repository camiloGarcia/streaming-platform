import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card card">
      <img src={movie.imageUrl} alt={movie.title} className="movie-card__image card-img-top" />
      <div className="movie-card__body card-body">
        <h3 className="movie-card__title card-title">{movie.title} ({movie.year})</h3>
        <p className="movie-card__text card-text">Director: {movie.director}</p>
        <p className="movie-card__text card-text">Synopsis: {movie.synopsis}</p>
        <p className="movie-card__text card-text">Reviews: {movie.reviews}</p>
        <p className="movie-card__text card-text">Duration: {movie.duration}</p>
        <Link to={`/movie/${movie.id}`} className="movie-card__link btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
