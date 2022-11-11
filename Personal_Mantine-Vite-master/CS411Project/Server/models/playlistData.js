const mongoose = require("mongoose");

const playlistSchema = new Schema({
    name: {type: String, required: true}
})