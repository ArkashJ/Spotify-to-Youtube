const express     = require("express")
const app         = express()
const connnection = require("./db")
const cors        = require("cors")

const tracks   = require("./models/track")
const playlist = require("./Casual Playlist.json")

var GenerateSchema = require('generate-schema')

require("dotenv").config()
const port = process.env.PORT || 8081

app.use(express.json());
app.use(cors());

// app.use('/api', routes)

app.get('/', (req, res) => {
    res.send("hellow world! Kashing out");
})

connnection();

app.listen(port, () => console.log(`listening on port ${port}`));

console.log(playlist)

const importData = () => {
    try { 
        for (let playlists of playlist.tracks){
            var schema = GenerateSchema.mongoose(playlists.tracks)
            tracks.create(schema)
        }
        console.log('data successfully imported')
    } catch (error) {
        console.log('error', error)
    }
}

importData();