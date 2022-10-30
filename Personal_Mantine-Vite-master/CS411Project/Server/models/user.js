const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const PassJ = require("joi")
const passwordComplexity = require("joi-password-complexity");

 
const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id: this._id},
        process.env.JWTPRIVATEKEY,
        {expiresIn: "1h"}
    )
    return token;
}

const validate = (user) => {
    const schema = PassJ.object({
        name: PassJ.string().min(5).max(20).required().label("Full Name"),
        email: PassJ.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    })
    return schema.validate(user)
}

const User = mongoose.model("user", userSchema)
module.exports = {User, validate}