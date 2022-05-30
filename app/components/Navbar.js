import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.scss';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              SO FUNKTIONIERT'S
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-links" onClick={closeMobileMenu}>
              SONDERANGEBOTE
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="#" className="nav-links" onClick={closeMobileMenu}>
              <i className="fas fa-user last-item"></i> MEIN BEREICH{' '}
              <i className="fas fa-caret-down last-item" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
