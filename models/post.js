'use strict'

var mongo = require('mongoose');
var schema = mongo.Schema;

var postSchema = schema({
  title: String,
  date: String,
  author: String,
  content: String,
  category: String,
});

module.exports = mongo.model('Post', postSchema);
