import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('/', (req, res) => {
  res.send(renderer(req));
});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});