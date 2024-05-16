import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../moviesData';
import '../styles/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleRent = () => {
    alert(`You have rented ${movie.title} for $${movie.price}`);
    // Lógica para alquilar la película
  };

  const handleBuy = () => {
    alert(`You have bought ${movie.title} for $${movie.buyPrice}`);
    // Lógica para comprar la película
  };

  return (
    <div className="movie-detail">
      <div className="movie-detail-info">
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Synopsis:</strong> {movie.synopsis}</p>
        <p><strong>Reviews:</strong> {movie.reviews}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Rent Price:</strong> ${movie.price}</p>
        <p><strong>Buy Price:</strong> ${movie.buyPrice}</p>
        <div className="movie-detail-buttons">
          <button onClick={handleRent}>Rent</button>
          <button onClick={handleBuy}>Buy</button>
        </div>
      </div>
      <div className="movie-detail-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movie.videoId}`}
          title="YouTube trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail;
