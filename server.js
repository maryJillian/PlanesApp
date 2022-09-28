const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/static', express.static(__dirname + '/assets'));

app.use('/api/planes', require('./routes/planes'));

mongoose.connect('mongodb://localhost:27017/PlaneDB')
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
    });
  });