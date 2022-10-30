const express = require("express");
const cors = require("cors");
const app = express()
const connection = require("./db")

require("dotenv").config()
const port = process.env.PORT || 8080
connection()

app.get("/", (req, res) => {
    res.send("hello world")
})
app.listen(port, () => console.log(`Listening on port ${port}`))

// use absolute path for other directories
// app.use('/static', express.static(path.join(__dirname, 'public')))