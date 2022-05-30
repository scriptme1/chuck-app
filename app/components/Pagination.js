import React from 'react';
import './Pagination.scss';
const Pagination = ({ jokesPerPage, totalJokes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="b-pagination-outer">
      <ul className="border-pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              href="#"
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
