const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

require("dotenv").config()
const port = process.env.PORT || 8080


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world")
})
connection()

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`))

// use absolute path for other directories
// app.use('/static', express.static(path.join(__dirname, 'public')))

