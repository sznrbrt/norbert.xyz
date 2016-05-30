'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'src')));

app.use('/', (req, res) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, '../index.html'));
});

var server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
