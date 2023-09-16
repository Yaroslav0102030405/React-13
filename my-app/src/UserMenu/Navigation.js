import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';
// import AppBar from '../components/AppBar/AppBar';

const Navigation = () => (
  <nav>
    <ul className="Navigation">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink__active"
        >
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink__active"
        >
          Заметки
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
