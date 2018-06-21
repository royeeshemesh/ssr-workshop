import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// ReactDOM.hydrate(<Home users={usersList} />, document.getElementById('root'));
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>,
  document.getElementById('root'));
