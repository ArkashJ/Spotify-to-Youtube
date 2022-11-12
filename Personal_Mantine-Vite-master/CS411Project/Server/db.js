const mongoose = require("mongoose");

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

