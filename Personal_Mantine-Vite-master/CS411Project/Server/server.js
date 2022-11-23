const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const passport = require("passport");
const session = require('express-session');
const bodyParser = require('body-parser')

require("dotenv").config()

require("./passportOAuth")

const port = process.env.PORT || 8080
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

app.use(session({ secret: 'melody hensley is my spirit animal' }));

app.get("/", (req, res) => {
    res.send("hello world")
})

connection()

// initialize passport sessions
app.use(passport.initialize())
app.use(passport.session())

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`))

// use absolute path for other directories
// app.use('/static', express.static(path.join(__dirname, 'public')))

