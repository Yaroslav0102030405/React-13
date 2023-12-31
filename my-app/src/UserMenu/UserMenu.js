import React from 'react';
import '../styles.css'

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="Container">
    <img src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
