'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('dashboard-list', {
    url: '/dashboard',
    templateUrl: 'client/dashboard/dashboard.list.view.ng.html',
    controller: 'DashboardCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  })
  .state('dashboard', {
    url: '/dashboard/:dashboardID',
    templateUrl: 'client/dashboard/dashboard.view.ng.html',
    controller: 'DashboardCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});
