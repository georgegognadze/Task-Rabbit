'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://task-ninjaclone.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html'        
      })
      // .when('/changepass', {
      //   templateUrl: 'views/partials/changepass.html'
      // })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
