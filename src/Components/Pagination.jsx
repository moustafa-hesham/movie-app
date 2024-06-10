import React from 'react';
import ReactPaginate from 'react-paginate';

export default function PaginationComponent({ pageNumber, pageCount }) {
  function handlePageClick(data) {
    pageNumber(data.selected + 1);
    console.log(data.selected + 1);
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2} // appears the number of pages at the start
      marginPagesDisplayed={2} //The number of pages to display for margins.
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={'pagination justify-content-center p-3'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'}
    />
  );
}
