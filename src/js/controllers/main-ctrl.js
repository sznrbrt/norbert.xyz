'use strict';

var app = angular.module('portfolioApp');

app.controller('mainCtrl', function($scope, $state, $cookieStore, $anchorScroll, $location, $timeout) {
    console.log('mainCtrl');
    $scope.hoverStyle = {};
    $scope.DOMContentLoaded = false;
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }
        if($scope.DOMContentLoaded) setProjectPanelHeight();
    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);

        $timeout(function() {
            if($scope.DOMContentLoaded) setProjectPanelHeight();
        }, 300)
    };

    window.onresize = function() {
        $scope.$apply();
    };

    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };


    $scope.skillsTooltip = false;
    $scope.showToolTip = function(str) {
      console.log(str);
      $scope.skillsTooltip = true;
      console.log($scope.skillsTooltip);
    }

    angular.element(document).ready(function () {
        $scope.DOMContentLoaded = true;
        setProjectPanelHeight();
    });

    function setProjectPanelHeight() {
        var heighT = document.getElementById("firstPanel").offsetHeight;
        var width = $scope.getWidth();
        if(width > 992){
            document.getElementById('thirdPanel').style.height = heighT - 285 + 'px';
            document.getElementById('goToH1').style['line-height'] = heighT - 360 + 'px';
            console.log(document.getElementById('goToH1').style['line-height']);
        } else {
            document.getElementById('thirdPanel').style.height = 'auto';
        }
    }
});
