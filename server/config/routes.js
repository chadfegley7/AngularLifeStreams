var User = require('../controllers/users.js');

var jwt = require('express-jwt');

var secret = 'sauce';

var auth = jwt({ secret: secret, userProperty: 'payload'});

var request = require('request');

module.exports = function(app){

  app.get('/', function(req, res){

    res.sendFile(__dirname + '../../client/index.html');

  });

  app.post('/register', User.create);

  app.post('/login', User.logIn);

};
