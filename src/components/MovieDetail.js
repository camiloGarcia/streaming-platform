import React from 'react';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import '../styles/MovieDetail.css';

const MovieDetail = () => {
  const { movies, updateAvailability } = useMovies();
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleRent = () => {
    if (movie.availability > 0) {
      updateAvailability(movie.id, -1);
      alert(`You have rented ${movie.title} for $${movie.price}`);
    }
  };

  const handleBuy = () => {
    if (movie.availability > 0) {
      updateAvailability(movie.id, -1);
      alert(`You have bought ${movie.title} for $${movie.buyPrice}`);
    }
  };

  return (
    <div className="container movie-detail">
      <div className="row">
        <div className="col-md-8 movie-detail-info">
          <h2>{movie.title} ({movie.year})</h2>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Synopsis:</strong> {movie.synopsis}</p>
          <p><strong>Reviews:</strong> {movie.reviews}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Rent Price:</strong> ${movie.price}</p>
          <p><strong>Buy Price:</strong> ${movie.buyPrice}</p>
          <p><strong>Available:</strong> {movie.availability}</p>
          <div className="movie-detail-buttons mt-3">
            <button className="btn btn-success mr-2" onClick={handleRent} disabled={movie.availability === 0}>Rent</button>
            <button className="btn btn-warning" onClick={handleBuy} disabled={movie.availability === 0}>Buy</button>
          </div>
        </div>
        <div className="col-md-4 movie-detail-video">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${movie.videoId}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
