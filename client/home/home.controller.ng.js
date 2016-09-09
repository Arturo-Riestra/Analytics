'use strict';

  angular.module('analyticsApp')
  .controller('HomeCtrl', function HomeCtrl ($scope, $state) {

    $scope.master = true;

    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };

    $scope.segments = ['Automotive','Microcontrollers'];
    $scope.selectedSegment;
    $scope.getSelectedSegment = function() {
      if ($scope.selectedSegment !== undefined) {
        return "You have selected: " + $scope.selectedSegment;
      } else {
        return "Segments";
      }
    };

    $scope.dateRanges = ['This Week','This Month'];
    $scope.selectedDateRange;
    $scope.getSelectedDateRanges = function() {
      if ($scope.selectedDateRanges !== undefined) {
        return "You have selected: " + $scope.selectedDateRanges;
      } else {
        return "Date Range";
      }
    };

    $scope.exportOption = function(ev) {
      console.log(ev);
  };
  
});
