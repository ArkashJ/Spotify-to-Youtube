const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    tracks: {
        type: Array,
        track: {
        "name"        : {type: String, required: true},
        "duration_ms" : {type: Number, required: true},
        "id"          : {type: String, required: true},
        }
    }
})

const tracks = mongoose.model('tracks', trackSchema)
module.exports = tracks;
