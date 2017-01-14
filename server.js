var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var cookieParser = require('cookie-parser');

var passport = require('passport');

var port = 8000;

var app = express();

require('./server/config/mongoose.js');

require('./passport/passport.js');

app.use(express.static(path.join(__dirname, './client')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(passport.initialize());

app.use(morgan('dev'));

var mongoose = require('mongoose');

var User = mongoose.model('User');

require('./server/config/routes.js')(app);

var server = app.listen(port, function(){
  console.log("Life Sreams Angular up and running!")
})
