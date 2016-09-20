'use strict';

  angular.module('analyticsApp')
  .controller('HomeCtrl', function ($scope, $state) {

    $scope.helpers({
      userProf: function() {
        return Meteor.users.find({_id: Meteor.userId()});
      }
    });

    $scope.subscribe('userProf', function() {
      return [ Meteor.userId() ];
    });
});
