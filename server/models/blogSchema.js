const mongoose = require("mongoose")


const BlogSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    image:{
        type:String,
        required:false
    }
})

const Blog = mongoose.model("Blog", BlogSchema)

module.exports = Blog
