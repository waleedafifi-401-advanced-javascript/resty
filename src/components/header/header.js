import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

function Header() {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <ul>
      <li><NavLink data-testid="homelink" to="/">Home</NavLink></li>
        <li><NavLink data-testid="historylink" activeClassName="active" to="/history">History</NavLink></li>
        <li><NavLink data-testid="helplink" activeClassName="active" to="/help">Help</NavLink></li>
        </ul>
    </nav>
    </header>
  );
}

export default Header;