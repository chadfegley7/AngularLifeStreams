realAngularLifeStreams.factory('MessageFactory', function($http){

  var factory = {};

  factory.getMessages = function(){

    return $http.get('/messages').then(function(res){

      return res.data;

    })

  }

  factory.createMessage = function(newMessage){

    return $http.post('/messages', newMessage)

  }

  return factory;

});
