import React, { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import { Row } from 'react-bootstrap';
import PaginationComponent from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../Redux/actions/movieAction';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const moviesData = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((item, index) => {
          return <CardMovie key={index} movieData={item} />;
        })
      ) : (
        <h2 className="text-center">No Data found</h2>
      )}
      {moviesData.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
}
