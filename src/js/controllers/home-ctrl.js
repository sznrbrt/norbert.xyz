'use strict';

var app = angular.module('portfolioApp');

app.controller('homeCtrl', function($scope, $state, $window) {
  console.log('homeCtrl');

  $scope.gotogithub = function () {
    $window.location.href = 'https://github.com/sznrbrt';
  }
});
