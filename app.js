const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Watch for incoming requests of method get
//to the route http://localhost:3050/api

mongoose.connect('mongodb://localhost/muber', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.json());
routes(app);

module.exports = app;
