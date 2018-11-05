import express from 'express';
import React from 'react';
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';

import Routes from './client/Routes';

const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes/>
    </StaticRouter>
  );

  res.send(`
<html>
<body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
</body>
</html>
`);
});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});