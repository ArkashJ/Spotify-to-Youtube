// Code to look up songs

router.get('/playlist', async(req, res) => {
    try {
        url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Stay%20%by%20Justin%20Beiber&key=AIzaSyAWaNEFxGZYD1p33C6T_tlNvq4Jxs8Np2g"
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

// code to make playlist

url = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=AIzaSyAWaNEFxGZYD1p33C6T_tlNvq4Jxs8Np2g"

// when user selects songs, first, make a new playlist called your playlist. 
// user needs oauth. Once done, Send the name and artist to the song url. It
// will find a url and post the song to it


url2 =  'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=[YOUR_API_KEY]' 
