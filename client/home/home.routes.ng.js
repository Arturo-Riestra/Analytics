'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'client/home/home.view.ng.html',
    controller: 'HomeCtrl'
  })
  .state('login', {
    url: '/',
    templateUrl: 'client/home/home.login.view.ng.html',
    controller: 'HomeCtrl'
  });
});
