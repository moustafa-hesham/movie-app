import { Container } from 'react-bootstrap';
import CustomNavBar from './Components/CustomNavBar';
import MovieList from './Components/MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const baseURL = 'https://api.themoviedb.org/3/movie/';
  const apiKey = '2b8f14d4791f77283418b48f364c8d11';
  const [pageCount, setPageCount] = useState(0);

  //Get all movies by axois
  async function getAllMovies() {
    const res = await axios.get(
      `${baseURL}popular?api_key=${apiKey}&language=en-US&page=1`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  }
  //Get Current Page
  async function getCurrentPage(page) {
    const res = await axios.get(
      `${baseURL}api_key=${apiKey}popular?&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  //to search in API
  async function filmSearch(word) {
    if (word === '') {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${word}`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  }
  return (
    <div className="color-body">
      <CustomNavBar search={filmSearch} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  moviesData={movies}
                  page={getCurrentPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
