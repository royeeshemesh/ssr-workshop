import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

// redux boilerplate
import { Provider } from 'react-redux';

export default (req, store) => {
  console.info(3, 'server call renderer helper');
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes/>
      </StaticRouter>
    </Provider>
  );

  return `
<html>
<body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
</body>
</html>
`;

}