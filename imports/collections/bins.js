import { Mongo } from 'meteor/mongo';

// Insert method
Meteor.methods({
   'bins.insert': function() {
       return Bins.insert({
          createdAt: new Date(),
          content: '',
          sharedWith: [],
          ownerId: this.userId
       });
   }
});

export const Bins = new Mongo.Collection('bins');

