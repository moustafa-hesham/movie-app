import React from 'react';
import CardMovie from './CardMovie';
import { Row } from 'react-bootstrap';
import PaginationComponent from './Pagination';

export default function MovieList({ moviesData, page, pageCount }) {
  return (
    <Row className="mt-3">
      {moviesData.length >= 1 ? (
        moviesData.map((item, index) => {
          return <CardMovie key={index} movieData={item} />;
        })
      ) : (
        <h2 className="text-center">No Data found</h2>
      )}
      {moviesData.length >= 1 ? (
        <PaginationComponent pageNumber={page} pageCount={pageCount} />
      ) : null}
    </Row>
  );
}
