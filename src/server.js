import express from 'express';
import {renderToString} from "react-dom/server";
import {matchRoutes, renderRoutes} from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
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
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  const promises = matchRoutes(Routes, req.path).map(({route})=>route.fetchData ? route.fetchData(store) : Promise.resolve(null));
  await Promise.all(promises);

  const content = renderToString(
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
    <div id="root">${content}</div>
    <script>
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