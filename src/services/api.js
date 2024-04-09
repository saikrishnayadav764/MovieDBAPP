// const API_KEY = 'deae37e2afe6623618daef82255e93fe';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWFlMzdlMmFmZTY2MjM2MThkYWVmODIyNTVlOTNmZSIsInN1YiI6IjY2MTRkMGZhNTkwMDg2MDE4NTdlZjBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ub4ThD8hcN7f82H17RkXKgkk7Kh0ng32cbimtcm3HV8';

// Fetching popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return null;
  }
};

// Fetching top-rated movies
export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch top rated movies');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return null;
  }
};

// Fetching upcoming movies
export const getUpcomingMovies = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch upcoming movies');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return null;
  }
};

// Fetching movie details by id
export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

// Fetch movie credits by id
export const getMovieCredits = async (id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie credits');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return null;
  }
};

// Searching movies by name
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    return null;
  }
};
