const path = require('path');
const express = require('express');

const app = express();

// set public folder as express static assets
app.use(express.static(path.resolve(__dirname, '../public')));

// listen to root request
app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <div id="root"></div>
            <script src="bundle.js"></script>
        </body>
        </html>    
    `);
});

// start server
app.listen(3000, ()=> {
    console.info('SSR server is listening on port 3000');
});