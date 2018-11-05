import React from 'react';
import Home from './components/Home';
import About from './components/About';

export default [
  {
    ...Home, // { component, fetchData }
    path: '/',
    exact: true
  },
  {
    ...About, // { component }
    path: '/about'
  }
];