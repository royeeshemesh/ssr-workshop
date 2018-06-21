import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('*', (req, res) => {
  console.info(1, 'server get request');
  const store = createStore();

  res.send(renderer(req, store));
});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});