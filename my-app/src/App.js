// Модули
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePages';
import AuthorsPage from './Pages/AuthorsPage';
import BooksPage from './Pages/BooksPage';
import LoginPage from './Pages/LoginPage';

import AutNav from './UserMenu/AutNav';
// import NotFoundPage from './Pages/NotFoundPage';

// import BookDetalisPage from './Pages/BookDetalisPage';

const App = () => (
  <>
    <nav>
      <ul>
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

    <AutNav />
    <hr></hr>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/books" component={BooksPage} />
      {/* <Route path="/books/:bookId" component={BookDetalisPage} /> */}
      <Route path="/login" component={LoginPage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </>
);

export default App;
