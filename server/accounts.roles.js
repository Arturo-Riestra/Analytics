Meteor.methods({'accounts.roles' (userid , role){
    Roles.addUsersToRoles(userid , role);
  }
});

Meteor.methods({'accounts.set.roles' (userid , role){
    Roles.setUserRoles(userid , role);
  }
});

Meteor.publish("userData", function () {
    return Meteor.users.find({}, {fields: {"roles": 1, "username": 1, "createdAt": 1}});

});

Meteor.publish("userProf", function (user_Id) {
    return Meteor.users.find({_id: user_Id}, {fields: {"roles": 1, "username": 1, "createdAt": 1}});

});

Meteor.publish("segmentsUser", function (user_Id) {
    return Meteor.users.find({_id: user_Id}, {fields: {"roles": 1, "username": 1, "createdAt": 1, "segments": 1}});

});

Accounts.onCreateUser(function(options, user) {
  user.dashboards = [];
  user.segments = Segments.find().fetch();
  return user;
});
