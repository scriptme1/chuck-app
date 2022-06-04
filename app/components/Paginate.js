import React from 'react';
import './Paginate.scss';

function Paginate({
  handleClick,
  handleNextbtn,
  handlePrevbtn,
  //handleLoadMore,
  jokesPerPage,
  totalJokes,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? 'active' : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <div className="paginate-container">
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      {/* <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button> */}
    </div>
  );
}

export default Paginate;
