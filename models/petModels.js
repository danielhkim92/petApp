const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	type: String,
	color: String,
	size: String,
	goodPet: Boolean,
})

module.exports = mongoose.model('Pet', PetSchema)