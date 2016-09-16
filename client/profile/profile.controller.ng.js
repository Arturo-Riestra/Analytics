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

    if (Meteor.userId()) {
      Meteor.subscribe( 'userProf', Meteor.userId() );

      $scope.helpers({
          userProf(){
              return Meteor.users.find({_id: Meteor.userId()}).fetch();
          }
      });
    };

    $scope.sort = {group: 1};

    $scope.helpers({
      segments: function() {
        return Segments.find({}, {
          sort: $scope.sort
        });
      }
    });

    $scope.subscribe('segments', function() {
      return [{
        sort: $scope.sort,
        limit: 0,
        skip: 0
      }, $scope.getReactively('search')];
    });

    $scope.segmentGroup = function(group){
      if ($scope.segName !== group){
        $scope.segName = group;
        return true;
      } else {
        return false;
      }
    };

    Meteor.call('segments.user',  Meteor.userId(), function(error, result){
      $scope.userSegmets = result;
    });



    $scope.userSegment = function(segmentName, userSegmets){

    };

    $scope.behaviorSegment = function(segmentName, userSegmets) {
      

    };

  });
