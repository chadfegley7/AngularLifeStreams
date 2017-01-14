var user = require('../controllers/users.js');

var jwt = require('express-jwt');

var secret = 'sauce';

var auth = jwt({ secret: secret, userProperty: 'payload'});

var request = require('request');

module.exports = function(app){

  app.post('/register', function(req, res, next){

    user.newReg(req, res, next)

  });

  app.post('/login', function(req, res, next){

    user.logIn(req, ers, next)

  });

};
