const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// const { checkHost } = require('./middleware_origin.js');
const { verifyTokenMiddleware } = require('./utilities/auth');


const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// app.use(checkHost); // Middleware to verify origin URL
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.text());
// verify token; if valid pass decoded user as req.user
// if not valid, req.user is not available to routes
app.use(verifyTokenMiddleware); 

app.use(routes);

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));

// -----------

// // Middleware
// // app.use(checkHost); // Middleware to verify origin URL
// app.use(express.urlencoded({ extended: true }));
// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// // app.use(bodyParser.json());
// app.use(bodyParser.text());
// // verify token; if valid pass decoded user as req.user
// // if not valid, req.user is not available to routes
// // app.use(verifyTokenMiddleware); 

