var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let HobbySchema = new Schema({
    name:{type: String, required:true}
});

var PlayerSchema = new Schema({
    name: {type: String, require: true, unique: false},
    lastName: {type: String, require: true, unique: false},
    hobbies: [{type: HobbySchema}]

});

let Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;