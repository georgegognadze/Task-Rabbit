'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://clone-task-ninja.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/login', {
        templateUrl: 'views/login.html',   
        controller: 'AuthController'     
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TaskController'
      })
      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
        controller: 'TaskController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
