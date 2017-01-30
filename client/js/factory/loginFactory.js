realAngularLifeStreams.factory('loginFactory', function($http){

  var factory = {};

  var users = [];

  factory.login = function(loginInfo, callback){

    console.log(loginInfo);

    $http.post('/login', loginInfo).success(function(output){

      console.log(output)

      callback(output);

    })

  }

  factory.register = function(newUser, callback){

    console.log(newUser, "loginFactory");

    $http.post('/register', newUser).success(function(output){

      console.log(output, "output from factory")

      callback(output);

    })

  }

  // factory.getPlayers = function(callback){
  //   $http.get("#/profile").success(function(output){
  //     players = output;
  //     callback(players);
  //
  //   })
  // }

  return factory;

})
