'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('configuration', {
    url: '/configuration',
    templateUrl: 'client/configuration/configuration.view.ng.html',
    controller: 'ConfigurationCtrl'
  });
});
