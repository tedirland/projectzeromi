const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();
//Watch for incoming requests of method get
//to the route http://localhost:3050/api
app.use(bodyParser.json());
routes(app);

module.exports = app;
