'use strict';

angular.module('analyticsApp')
.controller('HomeLoginCtrl', function($scope, $state) {

$scope.loginFrame = true;
$scope.requestFrame = false;

$scope.login = function() {
  $scope.reason = "";

  if ($scope.username === undefined || $scope.password === undefined) {

    $scope.reason = "Credentials are required"
  } else {
    Meteor.loginWithPassword($scope.username, $scope.password, function(err){
          if(err){
              $scope.reason = err.reason;
              console.log(err)
          } else {
            if (!$scope.rememberMe) {
              Accounts._autoLoginEnabled = false;
              Accounts._unstoreLoginToken();
              var pollLoginState = function () {
                var currentLoginToken = Accounts._storedLoginToken();
                if (! currentLoginToken) return;

                if (Accounts._lastLoginTokenWhenPolled != currentLoginToken) {
                  if (currentLoginToken) {
                    Accounts.loginWithToken(currentLoginToken, function (err) {
                      if (err) {
                        Accounts.makeClientLoggedOut();
                      }
                    });
                  } else {
                    Accounts.logout();
                  }
                }

                Accounts._lastLoginTokenWhenPolled = currentLoginToken;
              };

              setInterval(function () {
                pollLoginState();
              }, 3000);

            }

            $state.go('home');
          }
      });
  }




};

$scope.isLoggedIn = function() {
  if (Meteor.userId()) {
    return true;

  } else {
    return false;
  }
};

if (Meteor.userId()) {
  $state.go('home');
}

});
