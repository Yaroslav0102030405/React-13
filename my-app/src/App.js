// Модули
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePages';
import AuthorsPage from './Pages/AuthorsPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';

// import AutNav from './UserMenu/AutNav';
// import Navigation from './UserMenu/Navigation';
// import NotFoundPage from './Pages/NotFoundPage';

// import BookDetalisPage from './Pages/BookDetalisPage';
import './styles.css';
import AppBar from './components/AppBar/AppBar';

const App = () => (
  <>
    <AppBar />
    <hr></hr>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/books" component={RegisterPage} />
      {/* <Route path="/books/:bookId" component={BookDetalisPage} /> */}
      <Route path="/login" component={LoginPage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </>
);

export default App;
