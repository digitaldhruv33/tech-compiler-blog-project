

const addBlog = (req, res)=>{
    res.status(201).json("I am a add route")
}

const getBlog = (req,res)=>{
    res.status(201).json("I am get blog")
}



module.exports = {addBlog, getBlog}