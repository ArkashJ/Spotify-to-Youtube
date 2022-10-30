const mongoose = require("mongoose")
const PassJ = require("joi")

const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema({
    name: {type:String, required:true},
    songs: {type: Array, default: []},
    user: {type: ObjectId, ref: "user", required: true}
})

const validate = (playlist) =>{
    const schema = PassJ.object({
        name: PassJ.string().required(),
        user: PassJ.string().required(),
        songs: PassJ.array.items(PassJ.string())
    })
    return schema.validate(playlist)
}

const Playlist = mongoose.model("playlist", playlistSchema)
module.exports = {Playlist, validate}