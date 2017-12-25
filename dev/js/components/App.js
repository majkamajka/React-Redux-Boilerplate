import React from 'react';
import UserList from '../containers/user-list.js';
import UserDetails from '../containers/user-details.js';
require('../../scss/style.scss');

const App = () => (
  
  <div>
    <h2>username list:</h2>
    <UserList />
    <h3>user details:</h3>
    <UserDetails />
  </div>
);

export default App;