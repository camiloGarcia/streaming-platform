import React from 'react';
import '../styles/Trailer.css';

const Trailer = ({ trailerUrl }) => {
  return (
    <div className="trailer">
      <iframe
        width="560"
        height="315"
        src={trailerUrl}
        title="YouTube trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
