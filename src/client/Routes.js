import React from 'react';
import App from './App';
import Home from './components/Home';
import About from './components/About';

export default [
  {
    component: App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        path: '/about',
        component: About,
      }
    ]
  }
];