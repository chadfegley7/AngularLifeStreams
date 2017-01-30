var mongoose = require('mongoose');

var fs = require('fs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/RealLifeStreamsAngular');

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){

  if(file.indexOf('.js') > 0){

    require(models_path + '/' + file);

  }

});
