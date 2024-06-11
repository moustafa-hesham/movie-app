import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png';

import { useDispatch } from 'react-redux';
import { getAllMovie, movieSearch } from '../Redux/actions/movieAction';

export default function CustomNavBar() {
  function onSearch(data) {
    filmSearch(data);
  }
  const dispatch = useDispatch();

  //to search in API
  async function filmSearch(word) {
    if (word === '') {
      dispatch(getAllMovie());
    } else {
      dispatch(movieSearch(word));
    }
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
                onChange={(e) => onSearch(e.target.value)}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
