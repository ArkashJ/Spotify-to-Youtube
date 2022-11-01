const { application } = require('express');
const { User } = require('../models/user');

const SpotifyStrategy = require('passport-spotify').Strategy;

passsport.use(
    new SpotifyStrategy(
        {
            clientID: "01652b5b4e18468dbaf12f9d5ccf5491",
            clientSecret: "61c5896f2eb94d68908786b023aa595b",
            callbackURL: "http://localhost:8080/auth/spotify/callback"
        },
        function(accessToken, refreshToken, expires_in, profile, done){
            User.findOrCreate({spotifyId: profile.id, function(err,user){return done(err, user);} })
        }
    )
)

app.get('/auth/spotify', passport.authenticate('spotify'));
app.get('/auth/spotify/callback',
    passport.authenticate('spotify', {failureRedirect: '/login'}),
    function(req,res){
        res.redirect('/');
    }
)