import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardMovie({ movieData }) {
  const imgpath = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movieData.id}`}>
        <div className="card">
          <img
            src={imgpath + movieData.poster_path}
            className="card__image"
            alt="fil card"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Film Name: {movieData.title}</p>
              <p>Release date:{movieData.release_date}</p>
              <p>Numer of ratings: {movieData.vote_count}</p>
              <p> Rating: {movieData.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}
