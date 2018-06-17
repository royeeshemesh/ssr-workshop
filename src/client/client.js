import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const usersList = [
  {
    id: '1',
    name: 'Royee Shemesh',
    username: 'rshemesh',
    email: 'royee_shemesh@intuit.com'
  }
];

ReactDOM.hydrate(<Home users={usersList} />, document.getElementById('root'));
