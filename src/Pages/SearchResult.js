import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieCard from '../Components/MovieCard';

const SearchResult = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query).then(data => setMovies(data.results));
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
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

export default SearchResult;
