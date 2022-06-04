import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jokes.scss';
import Category from './Category';
import Paginate from './Paginate';

function Jokes({ jokes }) {
  const [currentPage, setcurrentPage] = useState(1);
  const [jokesPerPage, setjokesPerPage] = useState(15);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [filter, setFilter] = useState('all');

  function jokesFiltered(filter) {
    if (filter === 'all') {
      return jokes;
    } else if (filter === 'uncategorized') {
      return jokes.filter(joke => joke.categories == '');
    } else if (filter === 'explicit') {
      return jokes.filter(joke => joke.categories == 'explicit');
    } else if (filter === 'movie') {
      return jokes.filter(joke => joke.categories == 'movie');
    } else if (filter === 'music') {
      return jokes.filter(joke => joke.categories == 'music');
    } else if (filter === 'dev') {
      return jokes.filter(joke => joke.categories == 'dev');
    } else if (filter === 'history') {
      return jokes.filter(joke => joke.categories == 'history');
    } else if (filter === 'celebrity') {
      return jokes.filter(joke => joke.categories == 'celebrity');
    } else if (filter === 'food') {
      return jokes.filter(joke => joke.categories == 'food');
    } else if (filter === 'religion') {
      return jokes.filter(joke => joke.categories == 'religion');
    } else if (filter === 'sport') {
      return jokes.filter(joke => joke.categories == 'sport');
    } else if (filter === 'money') {
      return jokes.filter(joke => joke.categories == 'money');
    } else if (filter === 'science') {
      return jokes.filter(joke => joke.categories == 'science');
    } else if (filter === 'career') {
      return jokes.filter(joke => joke.categories == 'career');
    } else if (filter === 'political') {
      return jokes.filter(joke => joke.categories == 'political');
    }
  }

  const handleClick = event => {
    setcurrentPage(Number(event.target.id));
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleLoadMore = () => {
    setjokesPerPage(itemsPerPage + 5);
  };

  //Get current jokes

  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
  const currentJokes = jokesFiltered(filter).slice(
    indexOfFirstJoke,
    indexOfLastJoke
  );

  //Change Page

  //const paginate = pageNumber => setCurrentPage(pageNumber);

  let paginate = null;
  if (jokesFiltered(filter).length > 15) {
    paginate = (
      <Paginate
        jokesPerPage={jokesPerPage}
        totalJokes={jokesFiltered(filter).length}
        handleClick={handleClick}
        handleNextbtn={handleNextbtn}
        handlePrevbtn={handlePrevbtn}
        handleLoadMore={handleLoadMore}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        currentPage={currentPage}
      />
    );
  }
  return (
    <>
      <div className="maincontainer">
        <div className="container">
          <Category
            categories={jokes}
            setFilter={setFilter}
            setcurrentPage={setcurrentPage}
            setmaxPageNumberLimit={setmaxPageNumberLimit}
            setminPageNumberLimit={setminPageNumberLimit}
          />
        </div>
        <div className="container">
          <button className="category__button">All</button>
        </div>

        <div className="jokes__container">
          {currentJokes.map((joke, index) => (
            <div key={index} className="card">
              <div className="title__container">
                <img
                  src={require('../assets/assets_Homework_Front-End_01/green-light-copy@3x.png')}
                  className="arrowlink"
                />
                <h4 className="joketitle">
                  {joke.value.split(' ')[1] +
                    ' ' +
                    joke.value.split(' ')[2] +
                    ' ' +
                    joke.value.split(' ')[3]}
                </h4>
              </div>

              <p className="jokebody">{joke.value}</p>
              <div className="link__container">
                <Link to="/joke:id" className="link">
                  SEE STATS
                </Link>
                <img
                  src={require('../assets/assets_Homework_Front-End_01/path.png')}
                  className="arrowlink"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="paginate-container">{paginate}</div>
      </div>
    </>
  );
}

export default Jokes;
