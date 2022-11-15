const mongoose = require("mongoose");

const tracksSchema = new mongoose.Schema({
    duration    : {type: Number, required: true},
    songName    : {type: String, required: true},
    albumName   : {type: String, required: true},
    albumId     : {type: String, required: true},
    artist      : {type: String, required: true}
})

const tracks = mongoose.model('tracks', tracksSchema);
module.exports = tracks;

