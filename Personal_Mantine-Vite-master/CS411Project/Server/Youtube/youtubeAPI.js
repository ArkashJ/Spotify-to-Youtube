const {google} = require('googleapis');
require('dotenv').config();

google.youtube('v3').search.list({
    key: process.env.YOUTUBE,
    part: 'snippet',
    q: 'Lil Nas X Holiday',
    maxResults: 5
}).then((response)=>{
   const {data} = response;
   data.items.forEach((item)=>{
    console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n`)
   })
}).catch((err)=>console.log(err))

// Code to look up songs

router.get('/playlist', async(req, res) => {
    try {
        url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Stay%20%by%20Justin%20Beiber&key=KEY"
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

// code to make playlist

url = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=KEY"

// when user selects songs, first, make a new playlist called your playlist. 
// user needs oauth. Once done, Send the name and artist to the song url. It
// will find a url and post the song to it


url2 =  'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=[YOUR_API_KEY]'

// login to youtube, store token, make a playlist, look up the song and post the song to it



