realAngularLifeStreams.controller('loginCtrl', function($scope, $window, auth, loginFactory, $document){

  $scope.show_registration = false;

  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.logOut = function(){

    auth.logOut();

  }

  $scope.currentUser = auth.currentUser();

});
