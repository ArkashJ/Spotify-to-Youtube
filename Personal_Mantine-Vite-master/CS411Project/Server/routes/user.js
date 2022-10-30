const bycrypt = require("bcrypt")
const {User, validate} = require("../models/user");
const router = require("express").Router();

module.exports = router;

router.post("/", async(req,res) => {
    try{
        const {error} = validate(req.body)
        if (error){
            return res.status(400).send({message:error.details[0].message})
        }
        const user = await User.findOne({email: req.body.email});
        if (user){
            return res.status(409).send({message: "User with this email already exists"})
        }
        const salt = await bycrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bycrypt.hash(req.body.password, salt)
        await newUser({...req.body, password:hashPassword}).save();
        res.status(201).send({message: "user created successfully"})
    } catch (error){
        res.status(500).send({message:"internal server error"})
    }
})



