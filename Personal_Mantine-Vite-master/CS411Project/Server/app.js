const express     = require("express")
const app         = express()

const cors        = require("cors")

const routes = require("./routes/routes")

require("dotenv").config()
const port = process.env.PORT || 8081

app.use(express.json());
app.use(cors());

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send("hello world! Kashing out");
})

app.listen(port, () => console.log(`listening on port ${port}`));