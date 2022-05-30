import React from 'react';
import './Header.scss';
function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header__title">The Joke Bible</h1>
        <h3 className="header__subtitle">Daily Laughs for you and yours</h3>
        <div classname="search">
          <form className="search__form" role="search">
            <input
              className="search__input"
              placeholder="How can we make you laugh today?"
              name="srch-term"
              id="srch-term"
              type="text"
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
