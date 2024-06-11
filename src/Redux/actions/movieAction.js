import axios from 'axios';
import { AllMOVIES, apiKey, moviesAPI, searchAPI } from '../type/moviesType';

export function getAllMovie() {
  return async (dispatch) => {
    const res = await axios.get(moviesAPI);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
}

export function movieSearch(word) {
  return async (dispatch) => {
    const res = await axios.get(`${searchAPI}${word}`);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
}

export function getPage(page) {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ar-US&page=${page}`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
}
