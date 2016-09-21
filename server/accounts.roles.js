Meteor.methods({'accounts.roles' (userid , role){
    Roles.addUsersToRoles(userid , role);
  }
});

Meteor.methods({'accounts.set.roles' (userid , role){
    Roles.setUserRoles(userid , role);
  }
});

Meteor.publish("userData", function () {
    return Meteor.users.find({}, {fields: {"roles": 1, "username": 1, "createdAt": 1, "segments": 1}});

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

Meteor.methods({'update.segments.name' (segment) {

  Segments.find({_id : segment._id}).forEach(function(item){
    Meteor.users.find().forEach(function(userItem){
      Meteor.users.update({_id: userItem._id, "segments.name": item.name}, {
        $set: { "segments.$.name" : segment.name, "segments.$.group" : segment.group, "segments.$.adobeID" : segment.adobeID},
      });
    });
  });

}});

Meteor.methods({'update.groups.name' (group) {

  Groups.find({_id : group._id}).forEach(function(item){
    Segments.find({group : item.name}).forEach(function(segment){
      Meteor.users.find().forEach(function(userItem){
        Meteor.users.update({_id: userItem._id, "segments.name": segment.name}, {
          $set: { "segments.$.group" : group.name},
        });
      });
    });
  });

  Groups.find({_id : group._id}).forEach(function(item){
    Segments.find({group : item.name}).forEach(function(segment){      
      Segments.update({_id : segment._id}, {
        $set: {group: group.name}
      });
    });
  });

}});

Meteor.methods({'update.all.segments.user' (newSegment) {

  Meteor.users.find().forEach(function(item){
    Meteor.users.update(item._id, { $addToSet: {
        segments: {
          _id : Random.id(), adobeID: newSegment.adobeID,
          name : newSegment.name, group: newSegment.group, checked: true
        }
      }
    });
  });

}});

Meteor.methods({'remove.segment.all.users' (Segment) {
  Meteor.users.find().forEach(function(item){
    Meteor.users.update({_id : item._id, "segments.name" : Segment.name},
    {$pull : { segments : { name: Segment.name, group : Segment.group }}});
  });
}});

Meteor.methods({'remove.group.all.users' (Group) {
  Meteor.users.find().forEach(function(item){
    Meteor.users.update({_id : item._id, "segments.group" : Group.name},
    {$pull : { segments : { group: Group.name }}});
  });

  Segments.find({group: Group.name}).forEach(function(item){
    Segments.remove({_id:item._id});
  });
}});

Accounts.onCreateUser(function(options, user) {
  user.dashboards = [];
  user.segments = [];

  Segments.find().forEach(function(item){
    user.segments.push({_id : Random.id(), adobeID: item.adobeID,
    name : item.name, group: item.group, checked: true});
  });

  return user;
});
