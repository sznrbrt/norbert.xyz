'use strict';

var app = angular.module('portfolioApp');

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/templates/home.html',
      controller: 'homeCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
