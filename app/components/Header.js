import React from 'react';
import './Header.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Header({ onChange, query }) {
  const handleSubmit = event => {
    if (query !== '') {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <p>You searched for the word : "{query}" </p>,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#dac1a0',
      });
    }

    event.preventDefault();
  };

  return (
    <>
      <div className="header">
        <h1 className="header__title">The Joke Bible</h1>
        <h3 className="header__subtitle">Daily Laughs for you and yours</h3>
        <div classname="search">
          <form className="search__form" role="search" onSubmit={handleSubmit}>
            <input
              className="search__input"
              placeholder="How can we make you laugh today?"
              name="srch-term"
              id="srch-term"
              type="text"
              onChange={onChange}
              value={query}
            />
            <div className="input-group-btn">
              <button className="btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
