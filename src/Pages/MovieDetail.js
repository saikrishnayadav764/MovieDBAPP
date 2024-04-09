import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from '../services/api';


const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);


  useEffect(() => {
    getMovieDetails(id).then(data => setMovie(data));
    getMovieCredits(id).then(data => setCredits(data.cast));
  }, [id]);



  return (
    <div className="movie-detail-container">
      {movie && (
        <div className="movie-detail">
          <div style={{ 
  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundSize:"contain",
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  
 
}} className="movie-header">
            <div className="overlay"></div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-header-details">
              <h2>{movie.title}</h2>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
              <p><strong>Length:</strong> {movie.runtime} minutes</p>
              <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
            </div>
          </div>
          <div className="movie-overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <br/>
          <div className="movie-cast">
            <h3>Cast</h3>
            <div className="cast-list">
              {credits.map(actor => (
                <div className="cast-member" key={actor.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                  <p>{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
