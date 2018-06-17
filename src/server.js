import 'babel-polyfill';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('/', (req, res) => {

  const usersList = [
    {
      id: '1',
      name: 'Royee Shemesh',
      username: 'rshemesh',
      email: 'royee_shemesh@intuit.com'
    }
  ];

  res.send(`
<html>
<body>
    <div id="root">${renderToString(<Home users={usersList}/>)}</div>
    <script src="bundle.js"></script>
</body>
</html>    
    `);
});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});