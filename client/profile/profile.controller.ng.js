'use strict';

  angular.module('analyticsApp')
  .controller('ProfileCtrl', function ProfileCtrl ($scope, $state) {

    $scope.logginOut = function() {
      Meteor.logout(function(err){
            if(err){
                console.log(err)
            } else {
              $state.go('login');
            }
        });
    };

  });
