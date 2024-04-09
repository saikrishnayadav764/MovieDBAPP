import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUpcomingMovies } from '../services/api';
import MovieCard from '../Components/MovieCard';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
