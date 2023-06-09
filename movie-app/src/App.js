import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieCard from './component/MovieCard';
import MovieDescription from './component/MovieDescription';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    poster: 'movie1.jpg',
    description: 'Description of Movie 1',
    trailerLink: 'https://www.youtube.com/embed/trailer1',
  },
  {
    id: 2,
    title: 'Movie 2',
    poster: 'movie2.jpg',
    description: 'Description of Movie 2',
    trailerLink: 'https://www.youtube.com/embed/trailer2',
  },
  // Add more movies as needed
];

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
        <Route path="/movies/:movieId">
          <MovieDescription movies={movies} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
