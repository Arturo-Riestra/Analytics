'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'client/home/home.view.ng.html',
    controller: 'HomeCtrl'
  });
});
