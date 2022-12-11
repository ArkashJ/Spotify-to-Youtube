const express     = require("express")
const app         = express()
const connnection = require("./database/db")
const routes      = require("./routes/routes")
const playlists   = require('./routes/playlists')
const cors = require('cors')
const loginRoute = require('./SpotifyLogin/getMyPlaylist');

app.use(cors())
require('./google');

var passport = require('passport')

require("dotenv").config()
const port = process.env.PORT || 8081

app.use(express.json());

app.use('/api', routes)
app.use('/playlist', playlists)
app.use('/login', loginRoute)

connnection();

app.get('/', (req, res) => {
    res.send('Kashing out');
})



app.listen(port, () => console.log(`listening on port ${port}`));