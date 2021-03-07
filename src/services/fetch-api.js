import axios from 'axios';

const api_key = '0a07e98faf879be6b1b122de8f819d77';

const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetail = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US'`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const searchMovies = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieCast = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`,
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = id => {
  const fetchDetail = fetchMovieDetail(id);
  const fetchCast = fetchMovieCast(id);
  const fetchReviews = fetchMovieReviews(id);
  return Promise.all([fetchDetail, fetchCast, fetchReviews]);
};

export {
  fetchMovies,
  fetchMovieDetail,
  searchMovies,
  fetchMovieCast,
  fetchMovieReviews,
  fetchData,
};
