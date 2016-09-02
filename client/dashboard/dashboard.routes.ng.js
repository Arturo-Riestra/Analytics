'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'client/dashboard/dashboard.view.ng.html',
    controller: 'DashboardCtrl'
  });
});
