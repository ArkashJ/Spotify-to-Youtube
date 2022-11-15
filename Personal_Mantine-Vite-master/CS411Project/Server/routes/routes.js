const express = require("express")
const router = express.Router()
const tracks = require("../models/track")

router.post('/getAll', async (req, res) => {
    try{
        const data = await tracks.find()
        res.json(data)
    }   catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router

