'use strict';

angular.module('analyticsApp')
.controller('HomeLoginCtrl', function($scope, $state) {

$scope.login = function() {

  Meteor.loginWithPassword($scope.username, $scope.password, function(err){
        if(err){
            console.log(err)
        } else {
          $state.go('home');
        }
    });
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
