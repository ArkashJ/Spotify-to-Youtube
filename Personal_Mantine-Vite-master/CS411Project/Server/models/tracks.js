const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    tracks: {type: Array}
})