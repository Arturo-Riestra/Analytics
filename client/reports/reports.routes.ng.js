'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('reports', {
    url: '/reports',
    templateUrl: 'client/reports/reports.view.ng.html',
    controller: 'ReportsCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});
