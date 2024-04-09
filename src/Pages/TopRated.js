import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopRatedMovies } from '../services/api';
import MovieCard from '../Components/MovieCard';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
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

export default TopRated;
