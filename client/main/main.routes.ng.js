'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  });
});
