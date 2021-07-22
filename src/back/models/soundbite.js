/* Soundbite Schema Definition (soundbite.js) */

var mongoose = require('mongoose');

var soundbiteSchema = mongoose.Schema({
	id: String,
	audio : {
		text : String,
		speech : Buffer
	}
});

module.exports = mongoose.model('Soundbite', soundbiteSchema);