import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';

// create express app
const app = express();

// set public folder as express static assets
app.use(express.static('public'));

// listen to root request
app.get('*', (req, res) => {
  const Sample =() => {
    return (
      <div>
        <h1>This is sample SSR</h1>
        <button onClick={()=>alert('clicked')}>Do</button>
      </div>
    )
  };

  // this will give us a string!
  const renderedSample = ReactDomServer.renderToString(<Sample/>);

  res.send(`
  <html>
  <body>
    <div id="root">${renderedSample}</div>
  </body>
  </html>    
    `);
});

// start server
app.listen(5505, () => {
  console.info('SSR server is listening on port 5505');
});