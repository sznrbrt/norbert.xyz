'use strict';

var app = angular.module('portfolioApp');

app.controller('mainCtrl', function($scope, $state, $cookieStore, $anchorScroll, $location, $timeout, $window, $stateParams) {
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
        }, 400)
    };

    window.onresize = function() {
        $scope.$apply();
    };

    $scope.gotoAnchor = function(x) {
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

    $scope.email = "moc.kooltuo@trebron.scuzs".split('').reverse('').join('');

    $scope.sendEmail = function() {
        function sendMail(emailId,subject,message) {
            $window.open("mailto:"+ emailId + "?subject=" + subject+"&body="+message,"_self");
        }

        sendMail($scope.email,"","");
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
});
