'use strict'

Meteor.publish('groups', function(options) {

  Counts.publish(this, 'numberOfPages', Groups.find(), {noReady: true});
  return Groups.find();
});
