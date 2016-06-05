'use strict';

var app = angular.module('portfolioApp');

app.controller('homeCtrl', function($scope, $state, $window, $stateParams) {
  console.log('homeCtrl');

  $scope.gotogithub = function () {
    $window.location.href = 'https://github.com/sznrbrt';
  }

  $scope.openProject = function (proj) {
    if(proj === 'mbf') $state.go('mbfproject');
  }

  if($stateParams.target === 'projects'){
    console.log('yes');
  }

  $scope.reversedEmail = "moc.kooltuo@trebron.scuzs";
});
