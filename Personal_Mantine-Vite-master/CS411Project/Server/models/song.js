const mongoose = require("mongoose");
const PassJ = require("joi")

const songSchema = new mongoose.Schema({
    name: {type:String, required: true},
    artist: {type:String, required:true}
})

const validate = (song) => {
    const schema = PassJ.object({
        name: PassJ.string().required(),
        artist: PassJ.string.required()
    })
    return schema.validate(song)
}

const Song = mongoose.model("song", songSchema)
module.exports = {Song, validate}