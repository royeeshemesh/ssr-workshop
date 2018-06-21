import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {

  const usersList = [
    {
      id: '1',
      name: 'Royee Shemesh',
      username: 'rshemesh',
      email: 'royee_shemesh@intuit.com'
    }
  ];

  return `
<html>
<body>
    <div id="root">${renderToString(<Home users={usersList}/>)}</div>
    <script src="bundle.js"></script>
</body>
</html>
`;

}