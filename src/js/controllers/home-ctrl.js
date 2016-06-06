'use strict';

var app = angular.module('portfolioApp');

app.controller('homeCtrl', function($scope, $state, $window, $stateParams, $location) {
  console.log('homeCtrl');

  $scope.gotogithub = function () {
    $window.location.href = 'https://github.com/sznrbrt';
  }

  $scope.openProject = function (proj) {
    if(proj === 'mbf') $state.go('mbfproject');
  }

  if($stateParams.target){
    console.log($location);
    $location.hash($stateParams.target);
    setProjectPanelHeight();
    setBgVideoHeight();
  }

  function setProjectPanelHeight() {
      if(document.getElementById("firstPanel") === null) return;
      var heighT = document.getElementById("firstPanel").offsetHeight;
      var width = $scope.getWidth();
      if(width > 992){
          document.getElementById('secondPanel').style.height = heighT + 'px';
          document.getElementById('thirdPanel').style.height = heighT + 'px';
          document.getElementById('fourthPanel').style.height = heighT + 'px';
          // document.getElementById('goToH1').style['line-height'] = heighT - 360 + 'px';
      } else {
          document.getElementById('thirdPanel').style.height = 'auto';
      }
  }

  function setBgVideoHeight() {
      var height = $scope.getHeight();
      document.getElementById('videoBg').style.height = (height) + 'px';
      document.getElementById('videoText').style.top = ((height / 2) * (-1) - 100)  + 'px';
  }

  $scope.reversedEmail = "moc.kooltuo@trebron.scuzs";
});
