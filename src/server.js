import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('*', async (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({route})=>route.fetchData ? route.fetchData(store) : Promise.resolve(null));
  await Promise.all(promises);
  res.send(renderer(req, store));
});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});