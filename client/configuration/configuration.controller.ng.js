'use strict';

angular.module('analyticsApp')
.controller('ConfigurationCtrl', function($scope, $state) {

  if (Roles.userIsInRole(Meteor.userId(), 'admin') == false) {
    $state.go('home');
  }
  Meteor.subscribe( 'userData' );

  $scope.helpers({
      userData(){
          return Meteor.users.find({}).fetch();
      }
  });

  $scope.alterCredentials = function(userId, newRole) {

     Meteor.call('accounts.set.roles', userId, newRole);
     $scope.helpers({
         userData(){
             return Meteor.users.find({}).fetch();
         }
     });

  };

});
