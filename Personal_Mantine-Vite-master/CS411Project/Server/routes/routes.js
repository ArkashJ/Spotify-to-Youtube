const express   = require("express")
const router    = express.Router()
const Model     = require("../models/playlistData")

router.get('/getPlaylist', async(req, res) => {
    try{
        const data = Model.find()
        res.json(data)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// router.post('/post', async(req, res) => {
//     const data = new Model({
        
//     })
// })

module.exports = router;