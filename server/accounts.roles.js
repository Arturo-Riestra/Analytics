Meteor.methods({
  'accounts.roles' (userid , role){
    Roles.addUsersToRoles(userid , role);
  }
});


Meteor.publish("allusers", function () {
  return Meteor.users.find({},
  {
    // specific fields to return
    'profile.email': 1,
    'profile.name': 1,
    'profile.createdAt': 1
  });
});
