'use strict'

var postsController = require('../controllers/posts.controller');
var express = require('express');
var api = express.Router();

api.get('/post/:id', postsController.getPost);
api.get('/posts', postsController.getPosts);
api.post('/post/new', postsController.newPost);
api.put('/post/:id', postsController.updatePost);
api.delete('/post/:id', postsController.deletePost);


module.exports = api;
