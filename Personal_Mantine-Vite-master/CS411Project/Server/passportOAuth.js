const passport = require('passport')
const { User } = require('./models/user')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSERCRET,
        callbackURL: "http://localhost:8080/google/callback"
    },
    function(accessToken, refreshToken, profile, cb){
        // User.findOrCreate({googleId: profile.id}, function(err,user){
        //     return cb(err, user);
        // })
        return cb(null, profile);
    }
))

passport.serializeUser((user,cb) =>{
    cb(null, user.id)
});

passport.deserializeUser((user, cb) => {
    cb(null, user.id)
})