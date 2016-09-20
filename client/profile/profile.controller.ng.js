'use strict';

  angular.module('analyticsApp')
  .controller('ProfileCtrl', function ($scope, $state) {

    $scope.logginOut = function() {
      Meteor.logout(function(err){
            if(err){
                console.log(err)
            } else {
              $state.go('login');
            }
        });
    };

    if (Meteor.userId()) {
      Meteor.subscribe( 'userProf', Meteor.userId() );

      $scope.helpers({
          userProf(){
              return Meteor.users.find({_id: Meteor.userId()}).fetch();
          }
      });
    };


    $scope.helpers({
      userProf: function() {
        return Meteor.users.find({_id: Meteor.userId()});
      }
    });

    $scope.subscribe('userProf', function() {
      return [ Meteor.userId() ];
    });

    $scope.segmentGroup = function(group){
      if ($scope.segName !== group){
        $scope.segName = group;
        return true;
      } else {
        return false;
      }
    };

    $scope.behaviorSegment = function(segment_Id, checked) {

      Meteor.call('update.segments.user',  Meteor.userId(), segment_Id, !checked, function(error, result){
        if (error) {
          console.log(error.reason);
        } else {
          $scope.segments = result;
        }
      });

    };

  });
