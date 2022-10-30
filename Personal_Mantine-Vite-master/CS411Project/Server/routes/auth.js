const router = require("express").Router();
const {User} = require("../models/user")
const PassJ = require("joi")
router.post("/", async(req,res)=>{
    try{
        const {error} = validate(req.body)
        if (error){
            return res.status(400).send({message:error.details[0].message})
        }  
        const user = await User.findOne({email: req.body.email})
        if (!user){
            return res.status(401).send({message: "invalid email"})
        }
        const validPassword = await bycrypt.compare(
            req.body.password, user.password
        )
        if(!validPassword){
            return res.status(401).send({message: "invalid email or password"})
        }

        const token = user.generateAuthToken();
        res.status(200).send({data:token, message: "logged in successfully"})
    }   catch(error){
        res.status(500).send({message: "internal error"})
    }   
    
})

module.exports = router;