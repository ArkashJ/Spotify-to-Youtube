const tracks      = require("../models/track")
const playlist    = require("../Casual Playlist.json")

const importData = async () => {
    try{
        for (let i = 0; i < playlist.tracks.length; i++) {
            tracks.create({
                duration    : (parseFloat((playlist.tracks[i].duration_ms/60000).toFixed(2))),
                songName    : (playlist.tracks[i].name),
                albumName   : (playlist.tracks[i].album.name),
                albumId     : (playlist.tracks[i].album.id),
                artist      : (playlist.tracks[i].album.artists[0].name)
            }, function (err, small){
                if (err) {return handleError(err)}
            })
        }
        await console.log("data transfer successful")
    } catch(error){
        console.log('error sending data')
    }
}

importData();
