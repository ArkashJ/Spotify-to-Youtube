const express       = require("express")
const app           = express()
const connnection   = require("./db")
const cors          = require("cors")
const routes        = require("./routes/route")

require("dotenv").config()
const port = process.env.PORT || 8080

app.use(express.json());
app.use(cors());

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send("hellow world! Kashing out")
})

connnection()

app.listen(port, () => console.log(`listening on port ${port}`))