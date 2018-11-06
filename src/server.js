import express from 'express';
import {renderToString} from "react-dom/server";
import {matchRoutes, renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Routes from './client/Routes';
import reducers from './client/reducers';

const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('*', async (req, res) => {
  // create Redux store with same reducers as in the client store
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  // find all matched routes according to request path
  const matchedRoutes = matchRoutes(Routes, req.path).map(({route}) => route);

  // call fetch data of each matched routes
  const fetchDataPromises = matchedRoutes.map(matchedRoute => matchedRoute.fetchData ? matchedRoute.fetchData(store) : Promise.resolve(null));

  // wait until all of the data requests finished
  await Promise.all(fetchDataPromises);

  // Redux store now has all requested data
  const renderedApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {renderRoutes(Routes)}
        </div>
      </StaticRouter>
    </Provider>
  );

  res.send(`
<html>
<body>
    <div id="root">${renderedApp}</div>
    <script>
      // send server Redux store to client to initiate the client store from same state
      window.INITIAL_STATE = ${JSON.stringify(store.getState())};
    </script>
    <script src="bundle.js"></script>
</body>
</html>
`);


});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});