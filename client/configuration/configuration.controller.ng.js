'use strict';

angular.module('analyticsApp')
.controller('ConfigurationCtrl', function($scope, $state) {

    $scope.usersPortal = Meteor.subscribe("allusers");
    console.log(JSON.stringify(Meteor.subscribe('allUsers')));
});
