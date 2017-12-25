import React from 'react';
import UserList from '../containers/user-list.js';
require('../../scss/style.scss');

const App = () => (
  
  <div>
    <h2>username list:</h2>
    <UserList />
    <h3>user details:</h3>
  </div>
);

export default App;