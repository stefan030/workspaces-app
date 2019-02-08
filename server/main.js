import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
    // We have access to userId inside of publications as well thanks to Meteor authentication
    // Return the records where ownerId is equal to userId
   Meteor.publish('bins', function() {
      return Bins.find({ ownerId: this.userId });
   });
});