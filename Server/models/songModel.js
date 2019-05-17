const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var song_Schema = new Schema({
    songName: String,
    artistID: String,
    songDuration: String
});

var songModel = mongoose.model('songs', song_Schema);

module.exports = songModel;