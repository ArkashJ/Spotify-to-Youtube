const express     = require("express")
const app         = express()
const connnection = require("./database/db")
const routes      = require("./routes/routes")
const playlists   = require('./routes/playlists')
require('./google');

var passport = require('passport')

require("dotenv").config()
const port = process.env.PORT || 8081

app.use(express.json());

app.use('/api', routes)
app.use('/playlist', playlists)

connnection();

app.get('/', (req, res) => {
    res.send('<a href="auth/google">Autheticate with Google</a>');
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile', 'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.force-ssl']})
)

app.listen(port, () => console.log(`listening on port ${port}`));