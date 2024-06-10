import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function CustomNavBar({ search }) {
  function searchFilms(data) {
    search(data);
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search for a movie"
                onChange={(e) => searchFilms(e.target.value)}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
