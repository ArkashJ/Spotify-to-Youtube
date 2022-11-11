const mongoose = require("mongoose");
const tracks   = require("./models/track")
const playlist = require("./Casual Playlist.json")


module.exports = async() =>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try{
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to databse successfully")
    } catch (error){
        console.log("error in loading database")
    }
}

const importData = async () => {
    try {
        await tracks.create(data)
        console.log('data successfully imported')
        process.exit()
    } catch (error){
        console.log('error', error)
    }
}