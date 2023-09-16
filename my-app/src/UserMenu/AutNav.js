import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

const AutNav = () => (
  <ul className='AutNav'>
    <li>
      <NavLink
        to="/books"
        className="NavLink AutNav"
        activeClassName="NavLink__active"
      >
        Регистрация
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        className="NavLink AutNav"
        activeClassName="NavLink__active"
      >
        Логин
      </NavLink>
    </li>
  </ul>
);

export default AutNav;
