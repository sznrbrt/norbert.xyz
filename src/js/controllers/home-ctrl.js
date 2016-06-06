'use strict';

var app = angular.module('portfolioApp');

app.controller('homeCtrl', function($scope, $state, $window, $stateParams, $location) {
  console.log('homeCtrl');

  $scope.gotoAnchor = function(x) {
      if ($state.current.name !== 'home') {
          $state.go('home', {
              target: x
          });
      }
      //   var newHash = 'anchor' + x;
      if ($location.hash() !== x) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash(x);
      } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
      }
  };

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

  $scope.downloadResume = function() {
    console.log('download');
    window.open('files/resume-norbert.pdf');
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
