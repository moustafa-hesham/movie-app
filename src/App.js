import { Container } from 'react-bootstrap';
import CustomNavBar from './Components/CustomNavBar';
import MovieList from './Components/MovieList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div className="color-body">
      <CustomNavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
