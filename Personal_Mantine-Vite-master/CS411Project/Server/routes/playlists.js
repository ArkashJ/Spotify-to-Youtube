const express = require("express")
const playlists = express.Router()
const {google} = require("googleapis")
const axios = require("axios")

const baseUrl = "https://www.googleapis.com/youtube/v3"
const apiKey  = "add api key"

const youtube = google.youtube({
    version: "v3",
    auth:  apiKey
})


playlists.get('/search', async (req, res) => {
    try{
        const url = `${baseUrl}/search?key=${apiKey}&type=video&part=snippet&q=LilNasXHoliday`
        const response = await youtube.search.list({
            part: "snippet",
            q: "LilNasXHoliday",
            type: "video"
        })
        const titles = response.data.items.map((item) => item.snippet.title)
        res.send(titles)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = playlists;

