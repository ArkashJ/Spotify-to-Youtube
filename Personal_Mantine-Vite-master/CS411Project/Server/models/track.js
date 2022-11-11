const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    tracks: 
    {
        type: Array,
        "albumObject": 
        {
            type: Object,
            "albumInfo":
            {
                type: Object,
                "artist": 
                {
                    type: Array,
                    "artistData":
                    {
                        type        : Object,
                        "artistName":{type: String, required: true},
                        "id"        :{type: String, required: true}
                    }
                },
                "albumName" : {type: String, required: true},
                "releaseDay": {type: String, required: true},
                "duration"  : {type: String, required: true},
            },
            "songName": {type: String, required: true}
        }      
    },
})

const tracks = mongoose.Model('tracks', trackSchema)
module.exports = tracks;