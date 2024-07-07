const express = require('express');
const path = require('path');

const db = require('./config/connection');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // app.use(routes);

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Uncomment this code once you have built out queries and mutations in the client folder
    // app.get('*', (req, res) => {
      // res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    // });
  }

// Comment out this code once you have built out queries and mutations in the client folder
// db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
// });

