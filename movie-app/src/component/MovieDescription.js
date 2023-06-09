import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const history = useHistory();
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movieId);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        title="Trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default MovieDescription;
