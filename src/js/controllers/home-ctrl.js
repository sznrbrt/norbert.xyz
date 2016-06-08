'use strict';

var app = angular.module('portfolioApp');

app.controller('homeCtrl', function($scope, $state, $window, $stateParams, $location, $anchorScroll) {
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

  $scope.goToSocial = function(trgt) {
    if(trgt === 'github') {
      window.open('//www.github.com/sznrbrt');
    }
    if(trgt === 'linkedin') {
      window.open('//www.linkedin.com/in/sznrbrt');
    }
    if(trgt === 'twitter') {
      window.open('//www.twitter.com/sznrbrt');
    }
    if(trgt === 'stackoverflow') {
      window.open('//www.stackoverflow.com/users/5937567/sznrbrt');
    }
  }

  $scope.animateElementIn = function($el) {
      console.log($el, 'el');
      $el.removeClass('hidden');
      $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function($el) {
      console.log($el, '$el');
      $el.addClass('hidden');
      $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
  };

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
