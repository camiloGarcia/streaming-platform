import React from 'react';
import '../styles/MovieRating.css';

const MovieRating = ({ rating }) => {
  return (
    <div className="movie-rating">
      <p>Rating: {rating}/10</p>
    </div>
  );
};

export default MovieRating;
