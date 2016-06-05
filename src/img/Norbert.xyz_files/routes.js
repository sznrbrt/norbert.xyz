'use strict';

var app = angular.module('portfolioApp');

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/:target',
      templateUrl: '/templates/home.html',
      controller: 'homeCtrl'
    })
    .state('mbfproject', {
      url:'/projects/mbf',
      templateUrl: '/templates/mbfproject.html',
      controller: 'projectCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
