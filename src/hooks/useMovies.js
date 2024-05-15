import { useState, useEffect } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simular llamada a API
    setMovies([
      { id: 1, title: 'Movie 1', year: 2020 },
      { id: 2, title: 'Movie 2', year: 2021 },
      // ... otros datos de películas
    ]);
  }, []);

  return movies;
};

export default useMovies;
