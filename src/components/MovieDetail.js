import React from 'react';
import { useParams } from 'react-router-dom';
import MovieRating from './MovieRating';
import '../styles/MovieDetail.css';

const movies = [
  { id: 1, title: 'Movie 1', year: 2020, description: 'Description 1', rating: 8.5 },
  { id: 2, title: 'Movie 2', year: 2021, description: 'Description 2', rating: 7.0 },
  // ... otros datos de películas
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div className="movie-detail">
      <h2>{movie.title} ({movie.year})</h2>
      <p>{movie.description}</p>
      <MovieRating rating={movie.rating} />
    </div>
  );
};

export default MovieDetail;
