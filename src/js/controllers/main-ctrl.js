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
        $scope.DOMContentLoaded = true;
        var height = $scope.getHeight();
        var width = $scope.getWidth();
        document.getElementById('loaderBox').style.display = 'inline';

        setProjectPanelHeight();
        menuIndicatorToggle();
        var chrome = /chrome/i;
        if(chrome.test($window.navigator.userAgent));
            console.log(true);
        $timeout(function () {
            setBgVideoHeight();
            $scope.loading = false;
            document.getElementById('sidebar-wrapper').style.opacity = '1';
            document.getElementById('content-wrapper').style.opacity = '1';
        }, 2000);
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
        menuIndicatorToggle();
    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
        menuIndicatorToggle();
        $timeout(function() {
            if ($scope.DOMContentLoaded) setProjectPanelHeight;
        }, 400)
    };

    window.onresize = function() {
        $scope.$apply();
    };

    $scope.gotoAnchor = function(x, bool) {
        var height = $scope.getWidth();
        if ($state.current.name !== 'home') {
            console.log(bool, height);
            if(bool && height < 422) $scope.toggleSidebar();
            $state.go('home', {
                target: x
            });
        }
        //   var newHash = 'anchor' + x;
        if ($location.hash() !== x) {
            console.log(bool, height);
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash(x);
            if(bool && height < 422) $scope.toggleSidebar();
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
            if(bool && height < 422) $scope.toggleSidebar();
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

    function menuIndicatorToggle() {
        if ($scope.DOMContentLoaded && !$cookieStore.get('toggle')) {
            document.getElementById("menuButton").className = "fa fa-angle-double-right faa-horizontal animated menu-icon";
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
        if(!document.getElementById('videoBg')) return;
        if(!document.getElementById('videoText')) return;
        var height = $scope.getHeight();
        document.getElementById('videoBg').style.height = (height) + 'px';
        document.getElementById('videoText').style.top = ((height / 2) * (-1) - 100)  + 'px';
    }
});
