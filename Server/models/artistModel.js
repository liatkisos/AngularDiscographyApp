const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var artist_Schema = new Schema({
    artistName: String,
    artistImg: String
});

var artistModel = mongoose.model('artists', artist_Schema);

module.exports = artistModel;