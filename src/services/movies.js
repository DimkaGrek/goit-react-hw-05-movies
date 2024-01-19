import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'aad019924e86df423e45a1d04ee8b714',
    language: 'en-US',
  },
});

export const getTrendingMoviesList = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const getMoviesByName = async movie => {
  const { data } = await instance.get(`/search/movie?query=${movie}`);
  return data.results;
};

export const getMoviesById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  //   console.log(data);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  //   console.log(data.cast);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  //   console.log(data);
  return data.results;
};
