import { useState } from 'react';
import moviesData from '../moviesData';

const useMovies = () => {
  const [movies, setMovies] = useState(moviesData);

  const updateAvailability = (id, amount) => {
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex !== -1) {
      const updatedMovies = [...movies];
      if (updatedMovies[movieIndex].availability + amount >= 0) {
        updatedMovies[movieIndex].availability += amount;
        setMovies(updatedMovies);
      }
    }
  };

  return { movies, updateAvailability };
};

export default useMovies;
