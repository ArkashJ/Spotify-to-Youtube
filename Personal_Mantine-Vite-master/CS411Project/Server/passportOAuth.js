const passport = require('passport')
const { User } = require('./models/user')
const GoogleStrategy = require("passport-google-ouath20").Strategy

passport.use(new GoogleStrategy({
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:8080/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb){
        User.findOrCreate({googleId: profile.id}, function(err,user){
            return cb(err, user)
        })
    }
    ))