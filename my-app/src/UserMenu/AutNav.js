import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

const AutNav = () => (
  <ul>
    <li>
      <NavLink
        to="/books"
        className="NavLink"
        activeClassName="NavLink__active"
      >
        Регистрация
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        className="NavLink"
        activeClassName="NavLink__active"
      >
        Логин
      </NavLink>
    </li>
  </ul>
);

export default AutNav;
