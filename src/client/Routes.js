import React from 'react';
import Home from './components/Home';
import About from './components/About';

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    path: '/about',
    component: About,
  }
];