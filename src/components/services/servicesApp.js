import Axios from 'axios';

const key = '1dc3425ab08646abb6e2585375d477ea';

const getTrendingMovies = () => {
  return Axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
  ).then((response) => response.data.results);
};

const getMovies = (request) => {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${request}`
  ).then((response) => response.data.results);
};

const getOneMovie = (movieId) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
  ).then((response) => response);
};
const getCast = (movieId) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
  ).then((response) => response);
};

const getReviews = (movieId) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US`
  ).then((response) => response);
};
const servicesApp = {
  getTrendingMovies,
  getMovies,
  getOneMovie,
  getCast,
  getReviews,
};
export default servicesApp;
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=${key}&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
