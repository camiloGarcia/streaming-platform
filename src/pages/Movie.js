import React from 'react';
import MovieDetail from '../components/MovieDetail';
import Trailer from '../components/Trailer';

const Movie = () => {
  return (
    <div>
      <MovieDetail />
      <Trailer trailerUrl="https://www.youtube.com/embed/trailerID" />
    </div>
  );
};

export default Movie;
