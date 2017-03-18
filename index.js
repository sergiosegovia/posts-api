'use strict'

var mongo = require('mongoose');
var app = require('./app');
var port = 3000 || proccess.env.PORT ;

mongo.connect('mongodb://localhost:27017/posts_api', (err) => {
  if(err) {
    throw err;
  } else {
    console.log('Database succesfully connected');

    app.listen(port, (err) => {
      if(err) {
        throw err;
      } else {
        console.log('App running and listen on port: ' + port);
      }
    })
  }
});
