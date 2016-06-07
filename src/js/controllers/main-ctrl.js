'use strict';

var app = angular.module('portfolioApp');

app.controller('mainCtrl', function($scope, $state, $cookieStore, $anchorScroll, $location, $timeout, $window, $stateParams) {
    console.log('mainCtrl');

    $scope.loading = true;
    $scope.hoverStyle = {};
    $scope.DOMContentLoaded = false;
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };
    $scope.getHeight = function() {
        return window.innerHeight;
    };

    angular.element(document).ready(function() {
        console.log('test');
        $scope.DOMContentLoaded = true;
        setProjectPanelHeight();
        setBgVideoHeight();
        menuIndicatiorToggle();
        $timeout(()=> {
            $scope.loading = false;
            document.getElementById('sidebar-wrapper').style.opacity = '1';
            document.getElementById('content-wrapper').style.opacity = '1';
        }, 3000);
    });

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
        if ($scope.DOMContentLoaded) {
            setProjectPanelHeight();
            if(newValue > 992)
                setBgVideoHeight();
        }
        menuIndicatiorToggle();
    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
        menuIndicatiorToggle();
        $timeout(function() {
            if ($scope.DOMContentLoaded) setProjectPanelHeight;
        }, 400)
    };

    window.onresize = function() {
        $scope.$apply();
    };

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

    $scope.email = "moc.kooltuo@trebron.scuzs".split('').reverse('').join('');

    $scope.sendEmail = function() {
        function sendMail(emailId, subject, message) {
            $window.open("mailto:" + emailId + "?subject=" + subject + "&body=" + message, "_self");
        }

        sendMail($scope.email, "", "");
    }

    $scope.downloadResume = function() {
      window.open('files/resume-norbert.pdf');
    };

    function menuIndicatiorToggle() {
        if ($scope.DOMContentLoaded && $cookieStore.get('toggle')) {
            document.getElementById("menuButton").className = "fa fa-angle-double-left faa-passing-reverse animated menu-icon";
        }
        if ($scope.DOMContentLoaded && !$cookieStore.get('toggle')) {
            document.getElementById("menuButton").className = "fa fa-angle-double-right faa-passing animated menu-icon";
        }
        else {
            document.getElementById("menuButton").className = "menu-icon fa fa-times greenText";
        }
    };

    function setProjectPanelHeight() {
        if (document.getElementById("firstPanel") === null) return;
        var heighT = document.getElementById("firstPanel").offsetHeight;
        var width = $scope.getWidth();
        if (width > 992) {
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
});
