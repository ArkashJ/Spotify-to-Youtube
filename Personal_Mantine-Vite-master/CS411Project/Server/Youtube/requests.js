const axios = require('axios')

const makePlaylist = async () => {
    try {
        const res = await axios.post("https://www.googleapis.com/youtube/v3/playlists")
    } catch (err){
        console.log(err)
    }
}

