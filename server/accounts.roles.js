Meteor.methods({
  'accounts.roles' (userid , role){
    Roles.addUsersToRoles(userid , role);
  }
});

Meteor.methods({
  'accounts.set.roles' (userid , role){
    Roles.setUserRoles(userid , role);
  }
});

Meteor.publish("userData", function () {
    return Meteor.users.find({}, {fields: {"roles": 1, "username": 1, "createdAt": 1}});

});

Meteor.publish("userTemp", function () {
    return Meteor.users.find({roles: 'temp'}, {fields: {"roles": 1, "username": 1, "createdAt": 1}});

});
