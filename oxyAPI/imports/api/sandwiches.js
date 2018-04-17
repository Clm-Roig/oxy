import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Sandwiches = new Mongo.Collection('sandwiches');

Meteor.methods({
    'Sandwiches.addOne': ({ name }) => {
        return Sandwiches.insert({ name });
    },
});

Meteor.publish('sandwiches', () => {
    return Sandwiches.find();
});

export default Sandwiches;