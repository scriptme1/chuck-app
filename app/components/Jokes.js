import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jokes.scss';
import Category from './Category';
import Pagination from './Pagination';

function Jokes({ jokes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [jokesPerPage] = useState(15);

  //Get current jokes

  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
  const currentJokes = jokes.slice(indexOfFirstJoke, indexOfLastJoke);

  //Change Page

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="maincontainer">
        <div className="container">
          <Category categories={jokes} />
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
        <Pagination
          jokesPerPage={jokesPerPage}
          totalJokes={jokes.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Jokes;
