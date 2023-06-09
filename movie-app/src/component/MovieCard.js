import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movies/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
