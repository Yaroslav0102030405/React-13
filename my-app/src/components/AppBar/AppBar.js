import React from 'react';
// import { connect } from 'react-redux';
import Navigation from '../../UserMenu/Navigation';
import UserMenu from '../../UserMenu/UserMenu';
import AutNav from '../../UserMenu/AutNav';

// import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <header className="Header">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AutNav />}
  </header>
);

// const mapStateToProps = state => {
//   isAuthenticated: authSelectors.getIsAuthenticated(state);
// };

// export default connect(mapStateToProps)(AppBar);

export default AppBar;
