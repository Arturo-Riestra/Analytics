'use strict';

angular.module('analyticsApp')
.controller('HomeLoginCtrl', function($scope, $state) {

$scope.titleShow = true;
$scope.loginFrame = true;
$scope.logAuto = false;
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
            if (Roles.userIsInRole(Meteor.userId(), 'temp') == true) {
              $scope.reason = "Your account is not approved"
              Accounts.logout();


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
          }
      });
  }
};

$scope.request =  function() {

  if ($scope.accountRequest === undefined ) {
    $scope.reasonRequest = "Some fields are missing"

  } else {
      Accounts.createUser({username: $scope.accountRequest, password: "test"}, function(err){
            if(err){
                $scope.reasonRequest = err.reason;
            } else {
                Meteor.call('accounts.roles', Meteor.userId(), 'admin');
                $scope.reasonRequest = "Wait for your account confirmation";
            }
            Accounts.logout();

      });
  }


};

$scope.isLoggedIn = function() {
  if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'temp') !== true) {
    return true;

  } else {
    return false;
  }
};

$scope.isAdmin = function() {
  if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'admin') == true) {
    return true;

  } else {
    return false;
  }
};


if (Meteor.userId()) {

  $scope.titleShow = false;
  $scope.loginFrame = false;
  $scope.logAuto = true;
  $scope.requestFrame = false;
  $state.go('home');

};

});
