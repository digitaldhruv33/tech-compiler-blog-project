const User = require("../models/userSchema.js")


const addUser = async (req, res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    }catch(error){
        res.status(400).json(error)
    }
}

const getUser = async (req, res)=>{
    try{
        const response = await User.find(req.body.email)
        res.status(201).json(response)
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports = { addUser, getUser };
