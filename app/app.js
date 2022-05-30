import './styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Jokes from './components/Jokes';
import useFetch from './useFetch';
import Pagination from './components/Pagination';

function App() {
  const {
    data: jokes,
    isLoading: isJokeLoading,
    errorMessage: errorJokeMessage,
  } = useFetch('https://api.chucknorris.io/jokes/search?query=all');

  return (
    <Router>
      <Navbar />
      <Header />

      {isJokeLoading && <div>Loading...</div>}
      {jokes && <Jokes jokes={jokes.result} />}
      {errorJokeMessage && <div>{errorMessage}</div>}
      <Pagination />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
