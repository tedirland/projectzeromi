const express = require('express');
const routes = require('./routes/routes');
const app = express();
//Watch for incoming requests of method get
//to the route http://localhost:3050/api

routes(app);

module.exports = app;
