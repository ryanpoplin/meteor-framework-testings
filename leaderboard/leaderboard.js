UsersList = new Mongo.Collection('users');

if (Meteor.isClient) {

  Template.leaderboard.helpers({
  
    'user': function () {
      return UsersList.find()
    }
  
  });

}