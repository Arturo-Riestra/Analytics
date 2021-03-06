'use strict'

angular.module('analyticsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('profile', {
    url: '/profile',
    templateUrl: 'client/profile/profile.view.ng.html',
    controller: 'ProfileCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});
