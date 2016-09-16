
Meteor.methods({'segments.user' (userId) {

    return Meteor.users.find({_id: userId}, {fields: {"roles": 1, "username": 1, "createdAt": 1, "segments": 1}}).fetch();
  }
});
