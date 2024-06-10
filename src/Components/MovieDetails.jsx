import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const imgpath = 'https://image.tmdb.org/t/p/w500/';
  const movie = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  //get movie details by id
  async function getDetailsByID() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US&api_key=2b8f14d4791f77283418b48f364c8d11`
    );
    setMovieDetails(res.data);
  }

  useEffect(() => {
    getDetailsByID();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              className="img-movie w-30"
              src={imgpath + movieDetails.poster_path}
              alt="Movie Poster"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                Movie Title: {movieDetails.title}
              </p>
              <p className="card-text-details border-bottom">
                Release Date: {movieDetails.release_date}
              </p>
              <p className="card-text-details border-bottom">
                Vote Count: {movieDetails.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Rating: {movieDetails.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">Story:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movieDetails.overview}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
          <Link to="/">
            <button
              style={{ backgroundColor: 'red', border: 'none' }}
              className="btn btn-primary mx-2"
            >
              Back to Home
            </button>
          </Link>
          <a href={movieDetails.homepage} target="_blank">
            <button
              style={{ backgroundColor: 'red', border: 'none' }}
              className="btn btn-primary"
            >
              Watch Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}
