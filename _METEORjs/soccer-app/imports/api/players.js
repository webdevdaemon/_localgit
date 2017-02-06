import { Mongo } from 'meteor/mongo';
import SimpleSchema from '../../node_modules/simpl-schema';

const Players = new Mongo.Collection('players');
const PlayerSchema = new SimpleSchema({
	name             : {type: String},
	team             : {type: String},
	ballManipulation : {type: Number, defaultValue: 0},
	coverageSpeed    : {type: Number, defaultValue: 0},
	blockingAbility  : {type: Number, defaultValue: 0},
	gameStrategy     : {type: Number, defaultValue: 0},
	kickingAbility   : {type: Number, defaultValue: 0},
	playmaking       : {type: Number, defaultValue: 0},
	passingAbility   : {type: Number, defaultValue: 0},
	tacklingAbility  : {type: Number, defaultValue: 0},
	notes            : {type: String, optional: true }
});

Players.attachSchema(PlayerSchema);

export default { Players, PlayerSchema };
