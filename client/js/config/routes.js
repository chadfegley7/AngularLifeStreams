var realAngularLifeStreams = angular.module('realAngularLifeStreams', ['ui.bootstrap',  'ui.router', 'ui.navbar', 'jcs-autoValidate', 'ngAnimate', 'ngSanitize'])

.value('duScrollDuration', 1000)

  .value('duScrollOffset', 30);

realAngularLifeStreams.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {

      url: '/',

      templateUrl: './../static/partials/home.html',

      controller: 'authController'

    })

    .state('login', {

      url: '/login',

      templateUrl: './../static/partials/login.html',

      controller: 'loginController'

    });

});
