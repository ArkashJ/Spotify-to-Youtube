const express = require("express")
const router = express.Router()
const tracks = require("../models/track")

router.get('/getAll', async (req, res) => {
    try{
        const data = await tracks.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await tracks.findById(req.params.id);
        res.json(data)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id            = req.params.id;
        const options       = {new: true};
        const updatedData   = req.body;

        const result = 
            await tracks.findByIdAndUpdate(id, updatedData, options)

        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async(req, res) => {
    try {
        const id    = req.params.id
        const data  = await tracks.findByIdAndDelete(id)

        res.send(`Document with ${data.name} has been deleted`)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;

