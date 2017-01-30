realAngularLifeStreams.controller('authCtrl', function($scope, $state, auth){

  $scope.user = {};

  $scope.loggedIn = false;

  $scope.show_registration = false;

  $scope.register = function(){

    auth.register($scope.new_user).then(function(){

      if (typeof error === 'string'){

        $scope.error = "Your username/email already exists.";

        $scope.new_user.password = "";

        $scope.new_user.confirm_password = "";

      }

      else{

        // $scope.error = error;

        $scope.new_user.password = "";

        $scope.new_user.confirm_password = "";

      }

    }).then(function(){

      $state.go('home');

      console.log($scope.new_user);

    });

  };

  $scope.logIn = function(){

    auth.logIn($scope.login_user).then(function(){

      $state.go('explore');

      console.log($scope.user);

    });

  };

});

realAngularLifeStreams.controller('NavCtrl', function($scope, auth,$uibModal){

    $scope.isLoggedIn = auth.isLoggedIn;

    $scope.currentUser = auth.currentUser;

    $scope.logOut = auth.logOut;
  });
