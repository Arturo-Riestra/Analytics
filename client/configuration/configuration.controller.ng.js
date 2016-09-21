'use strict';

angular.module('analyticsApp')
.controller('ConfigurationCtrl', function($scope, $timeout, $mdSidenav, $log, $state) {

  $scope.editedSegmet = '';
  $scope.page = 1;
  $scope.perPage = 5;
  $scope.sort = {name : 1};
  $scope.orderProperty = '1';
  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildToggler('right');
  $scope.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };

  $scope.isOpenLeft = function(){
    return $mdSidenav('left').isOpen();
  };

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

  Meteor.subscribe( 'groups');

  $scope.helpers({
    groups(){
      return Groups.find().fetch();
    }
  });

  $scope.helpers({
    segments: function() {
      return Segments.find({}, {
        sort: $scope.getReactively('sort')
      });
    },
    segmentsCount: function() {
      return Counts.get('numberOfSegments');
    }
  });

  $scope.subscribe('segments', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.remove = function(segment) {
    Segments.remove({_id:segment._id});

    Meteor.call('remove.segment.all.users', segment, function(error, result){
      if (error) {
        console.log(error.reason);
      }
    });
  };

  $scope.update = function(segment){

    Meteor.call('update.segments.name', segment, function(error, result){
      if (error) {
        console.log(error.reason);
      } else {
        Segments.update({_id: segment._id},{
          $set: {name: segment.name, adobeID: segment.adobeID, group: segment.group}
        });
      };
    });
  };

  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };

  return $scope.$watch('orderProperty', function() {
    if ($scope.orderProperty) {
      $scope.sort = {
        name_sort: parseInt($scope.orderProperty)
      };
    }
  });


  $scope.editSegment = function(segment_id) {
    $scope.editedSegmet = segment_id;
    console.log($scope.editedSegmet);
    console.log(1);
  };



/***********************Layout JS**********************************************/

  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }

})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.save = function() {
      if ($scope.form.$valid) {

        Groups.insert($scope.newGroup);
        $scope.newGroup = undefined;
      }

    };

    $scope.remove = function(group){

      Meteor.call('remove.group.all.users', group, function(error, result){
        if (error) {
          console.log(error.reason);
        } else {
          Groups.remove({_id: group._id});
        };
      });

    };

    $scope.update = function(group){

      Meteor.call('update.groups.name', group, function(error, result){
        if (error) {
          console.log(error.reason);
        } else {
          Groups.update({_id: group._id},{
            $set: {name: group.name, adobeID: group.adobeID}
          });
        };
      });
    };

  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

    $scope.save = function() {
      if ($scope.form.$valid) {
        var date = new Date();
        Meteor.call('update.all.segments.user', $scope.newSegment, function(error, result){
          if (error) {
            console.log(error.reason);
          } else {
            $scope.newSegment.createdAt = date.toJSON();
            Segments.insert($scope.newSegment);
            $scope.newSegment = undefined;
          };
        });

      }
    };

  });
