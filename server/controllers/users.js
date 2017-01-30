var mongoose = require('mongoose');

var User = mongoose.model('User');

var passport = require('passport');

var jwt = require('express-jwt');

var secret = "3Nc4Yp78On";

var auth = jwt({ secret: secret, userProperty: 'payload'});

module.exports = {

  create: function(req, res){

    if(req.body.password !== req.body.confirm_password){

      return res.status(400).json({ message: "Incorrect Password"});

    }

    if(!req.body.username || !req.body.password || !req.body.email){

      return res.status(400).json({ message: "Please complete all required fields."});

    }

    var user = new User();

    user.username = req.body.username;

    user.email = req.body.email;

    user.setPassword(req.body.password)

    user.save(function (err){

      if(err){ return console.log(err); }

      return res.json({token: user.generateJWT()})

    });

  },

  delete: function(req, res){

    User.remove({ _id: req.params.id }, function(err){

      if(err){

        return res.json(err);

      }

      return res.json(true);

    });

  },

  logIn: function(req, res, next){

    if(!req.body.username || !req.body.password){

      return res.status(400).json({ message: 'Please complete all required fields'});

    }

    passport.authenticate('local', function(err, User, info){

      if(err){

        return next(err);

      }

      if(User){

        return res.json({ token: User.generateJWT()});

      }

      else{

        return res.status(401).json(info);

      }

    })

    (req, res, next);

  }

}
