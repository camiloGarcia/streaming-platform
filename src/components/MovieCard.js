import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.imageUrl} alt={movie.title} className="card-img-top movie-card-image" />
      <div className="card-body">
        <h3 className="card-title">{movie.title} ({movie.year})</h3>
        <p className="card-text">Director: {movie.director}</p>
        <p className="card-text">Synopsis: {movie.synopsis}</p>
        <p className="card-text">Reviews: {movie.reviews}</p>
        <p className="card-text">Duration: {movie.duration}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
