import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello from React!</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
