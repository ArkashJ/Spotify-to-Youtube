const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID         : process.env.GOOGLE_CLIENT_ID,
    clientSecret     : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL      : "http://www.example.com/auth/google/callback",
    passReqToCallback: true,
    scope            : [
        'email',
        'profile',
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.force-ssl',
      ],
  },
  function(request, accessToken, refreshToken, profile, cb) {
    return cb(err, profile);
  }
));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});