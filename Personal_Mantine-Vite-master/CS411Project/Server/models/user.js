const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const PassJ = require("joi")
const passwordComplexity = require("joi-password-complexity")

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    likedSongs: {type: String}
})