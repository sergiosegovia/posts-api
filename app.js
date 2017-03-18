'use strict'

var express = require('express');
var parser = require('body-parser');
var api = require('./routes/posts.routes');
var app = express();

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use('/api', api);

module.exports = app;
