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

Meteor.publish("userProf", function (user_Id ) {
    return Meteor.users.find({_id: user_Id},
          {fields: {"roles": 1, "username": 1, "createdAt": 1, "segments": 1}});

});

Meteor.methods({'update.segments.user' (userId, segment_Id, checked) {

  Meteor.users.update({_id: userId, "segments._id": segment_Id}, {
    $set: { "segments.$.checked": checked },
  });

}});

Accounts.onCreateUser(function(options, user) {
  user.dashboards = [];
  user.segments = [];

  Segments.find().forEach(function(item){
    user.segments.push({_id : Random.id(), adobeID: item.adobeID, name : item.name, group: item.group, checked: true});
  })

  return user;
});
