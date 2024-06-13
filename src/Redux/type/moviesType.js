export const AllMOVIES = 'AllMOVIES';
const baseURL = 'https://api.themoviedb.org/';
export const apiKey = '2b8f14d4791f77283418b48f364c8d11';

export const moviesAPI = `${baseURL}3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
export const searchAPI = `${baseURL}/3/search/movie?api_key=${apiKey}&language=en&query=`;
