realAngularLifeStreams.controller('messageCtrl', function($scope, MessageFactory){

  $scope. messages = [];

  fetchMessages();

  function fetchMessages(){

    MessageFactory.getMessages().then(function(data){

      $scope.messages = data;

    });

  }

  $scope.createMessage = function(){

    MessageFactory.createMessage($scope.newMessage).then(function(){

      $scope.newMessage = {};

    });

  }

  $scope.deleteMessage = function(id){

    MessageFactory.deleteMessage(id).then(fetchMessages)

  }

});
