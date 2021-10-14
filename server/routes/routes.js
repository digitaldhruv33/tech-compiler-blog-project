const router = require("express").Router()


router.post('/add', (req,res)=>{
    res.status(201).json("I am a add route")
})

module.exports = router