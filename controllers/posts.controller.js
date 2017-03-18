'use strict'

var Post = require('../models/post');

function getPost (req, res) {
  var postId = req.params.id;

  Post.findById(postId, (err, post) => {
    if(err) {
      if(!post) {
        res.status(404).send({message: "Post " + postId + " dosn't exists"});
      } else {
        res.status(500).send({message: "Internal Server Error"});
      }
    } else {
      res.status(200).send({post});
    }
  })
};

function getPosts (req, res) {

  Post.find({}, (err, posts) => {
    if(err) {
      if(!posts) {
        res.status(404).send({message: "There's not have any post at this moment"});
      } else {
        res.status(500).send({message: "Internal Server Error"})
      }
    } else {
      res.status(200).send({posts});
    }
  })
};

function newPost (req, res) {
  var data = req.body;
  var post = new Post();

  post.title = data.title;
  post.date = data.date;
  post.author = data.author;
  post.content = data.content;
  post.category = data.category;

  post.save((err, postCreated) => {
    if(err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).send({post: postCreated});
    }
  });
};

function updatePost (req, res) {

  var postId = req.params.id;
  var data = req.body;

  Post.findByIdAndUpdate(postId, data, (err, postUpdated) => {
    if(err){
      res.status(500).send({message: "Internal Server Error"});
    } else {
      res.status(200).send({updated: true, post: postUpdated});
    }
  });
};

function deletePost (req, res) {

  var postId = req.params.id;

  Post.findById(postId, (err, post) => {
    if(err) {
      res.status(500).send({message: "Internal Server Error"});
    } else {
      post.remove(() => {
        res.status(200).send({deleted: true});
      });
    }
  })

}

module.exports = {
  getPost,
  getPosts,
  newPost,
  updatePost,
  deletePost,
}
