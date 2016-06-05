'use strict';

var app = angular.module('portfolioApp');

app.controller('projectCtrl', function($scope, $state, $window) {
  $scope.project = mbfProject;

  $scope.goBack = function () {
    $state.go('home', { target: 'projects'} );
  }
});

var mbfProject = {
  name: 'MBF Konferencia',
  type: 'smartphone_app',
  technologies: ['Ionic', 'AngularJs', 'Sass', 'PHP'],
  imgs: ['./img/projectimgs/mbfappios2.png', './img/projectimgs/mbfappios1.png'],
  shortDesc: 'Hybrid Mobile App built with Ionic.',
  longDesc: 'Conference info app built with Ionic. Available at Google Play and App store.'
}
